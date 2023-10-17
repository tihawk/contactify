import { Navigate } from "react-router";
import { useUser } from "../hooks/useUser";
import { Button, Divider, FormControl, Grid, IconButton, Input, InputAdornment, Typography } from "@mui/material";
import { Contact } from "../interfaces";
import { useContact } from "../hooks/useContact";
import ContactCard from "../components/ContactCard";
import ContactFormModal from "../components/ContactFormModal";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

function Dashboard() {
  const { user } = useUser()
  const { data, loadData, createContact, editContact, deleteContact } = useContact()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
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

  const handleSearch = () => {
    loadData(query)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.code === 'Enter') {
      handleSearch()
    }
  }

  return (
    <>
      <ContactFormModal contact={{} as Contact} handleClose={handleClose} handleSubmit={handleCreate} open={open} />
      <Typography variant="h2">Welcome, {user?.username}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Divider/>
        </Grid>
        <Grid sx={{display: 'flex'}} item xs={12}>
          <Button color="primary" size="large" onClick={handleOpen}>Add Contact</Button>
          <FormControl sx={{ml: 'auto', mr: 'auto'}}>
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={e => handleKeyDown(e)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch}>
                    <SearchIcon/>
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
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