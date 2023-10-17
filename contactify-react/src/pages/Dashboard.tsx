import { Navigate } from "react-router";
import { useUser } from "../hooks/useUser";
import { Divider, Grid, Typography } from "@mui/material";
import { Contact } from "../interfaces";
import { useContact } from "../hooks/useContact";
import ContactCard from "../components/ContactCard";

function Dashboard() {
  const { user } = useUser()
  const { data, loadData, createContact, editContact, deleteContact } = useContact()
  if (!user?.authToken) {
    return <Navigate to="/login"/>
  }

  const handleCreate = async (contact: Contact) => {
    await createContact(contact)
    loadData()
  }

  const handleEdit = async (contact: Contact) => {
    await editContact(contact)
    loadData()
  }

  const handleDelete = async (contact: Contact) => {
    await deleteContact(contact)
    loadData()
  }

  return (
    <>
      <Typography variant="h2">Welcome, {user?.username}</Typography>
      <Divider/>
      <Grid container spacing={2}>
        {data.length && data?.map((contact: Contact) => (
          <Grid item key={contact.id}>
            <ContactCard editContact={handleEdit} deleteContact={handleDelete} contact={contact}/>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Dashboard