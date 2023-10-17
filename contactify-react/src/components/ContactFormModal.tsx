import { Box, Button, Divider, FormControl, FormHelperText, Grid, Input, InputLabel, Modal, Typography } from "@mui/material"
import { Contact } from "../interfaces"
import { useState } from "react"

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
interface ContactFormModalPropsI {
  open: boolean
  handleClose: () => void
  handleSubmit: (contact: Contact) => void
  contact: Contact
}
function ContactFormModal({open, handleClose, handleSubmit, contact}: ContactFormModalPropsI) {
  const [newContact, setContact] = useState<Contact>(contact)

  const onChangeFirstName = (fName: string) => setContact(val => ({...val, firstName: fName}))
  const onChangeLastName = (lName: string) => setContact(val => ({...val, lastName: lName}))
  const onChangePhone = (phone: string) => setContact(val => ({...val, phoneNumber: phone}))
  const onChangeEmail = (email: string) => setContact(val => ({...val, email: email}))
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit or create a contact
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl>
              <InputLabel htmlFor="first-name">First name</InputLabel>
              <Input
                id="first-name"
                value={newContact.firstName}
                onChange={e => onChangeFirstName(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl>
              <InputLabel htmlFor="last-name">Last name</InputLabel>
              <Input
                id="last-name"
                value={newContact.lastName}
                onChange={e => onChangeLastName(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <InputLabel htmlFor="email">Email address</InputLabel>
              <Input
                type="email"
                id="email"
                value={newContact.email}
                onChange={e => onChangeEmail(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <InputLabel htmlFor="phone">Phone number</InputLabel>
              <Input
                id="phone"
                value={newContact.phoneNumber}
                onChange={e => onChangePhone(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <Divider/>
          </Grid>
          <Grid item>
            <Button onClick={() => {
              handleSubmit(newContact)
              handleClose()
            }}>Save</Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  )
}

export default ContactFormModal