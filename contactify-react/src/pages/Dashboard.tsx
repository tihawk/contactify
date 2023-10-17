import { Navigate } from "react-router";
import { useUser } from "../hooks/useUser";
import { Button, Divider, Grid, IconButton, Typography } from "@mui/material";
import { Contact } from "../interfaces";
import { useContact } from "../hooks/useContact";
import ContactCard from "../components/ContactCard";
import ContactFormModal from "../components/ContactFormModal";
import { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Dashboard() {
  const { user } = useUser()
  const { data, loadData, createContact, editContact, deleteContact } = useContact()
  const [open, setOpen] = useState(false)
  if (!user?.authToken) {
    return <Navigate to="/login"/>
  }

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

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
      <ContactFormModal contact={{} as Contact} handleClose={handleClose} handleSubmit={handleCreate} open={open} />
      <Typography variant="h2">Welcome, {user?.username}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Divider/>
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" size="large" onClick={handleOpen}>Add Contact</Button>
        </Grid>
        {data.length ? data?.map((contact: Contact) => (
          <Grid item key={contact.id}>
            <ContactCard editContact={handleEdit} deleteContact={handleDelete} contact={contact}/>
          </Grid>
        )) : null}
      </Grid>
    </>
  )
}

export default Dashboard