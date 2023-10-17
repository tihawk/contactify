import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { Contact } from "../interfaces"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import ContactFormModal from "./ContactFormModal"
import { useState } from "react"

interface ContactCardPropsI {
  contact: Contact
  deleteContact: (contact: Contact) => void
  editContact: (contact: Contact) => void
}
function ContactCard({contact, deleteContact, editContact}: ContactCardPropsI) {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  return (
    <>
      <ContactFormModal handleSubmit={editContact} open={open} handleClose={handleClose} contact={contact} />
      <Card sx={{maxWidth: '250px'}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {contact.firstName}{' '}{contact.lastName || 'N/A'}
          </Typography>
          <Typography sx={{alignItems: 'middle'}} variant="body1" component="div">
            <EmailIcon/>&nbsp;{contact.email}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <LocalPhoneIcon/>&nbsp;{contact.phoneNumber || 'N/A'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleOpen} size="small">Edit</Button>
          <Button onClick={() => deleteContact(contact)} color="warning" size="small">Delete</Button>
        </CardActions>
      </Card>
    </>
  )
}

export default ContactCard