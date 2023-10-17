import { useEffect, useState } from "react"
import { Contact } from "../interfaces"
import { contactHandlers } from "../services/Contact"

export const useContact = () => {
  const [data, setData] = useState<Contact[]>([])

  const loadData = async (query?: string) => {
    //@ts-ignore
    const res = await contactHandlers["/contact"].get(query)
    if (res?.content)
    setData(res.content)
  }

  useEffect(() => {
    loadData()
  }, [])

  const createContact = async (newContact: Contact) => {
    //@ts-ignore
    const createdContact = await contactHandlers["/contact"].post(newContact)
  }

  const editContact = async (newContact: Contact) => {
    //@ts-ignore
    const createdContact = await contactHandlers["/contact/{id}"].put(newContact)
  }

  const deleteContact = async (newContact: Contact) => {
    //@ts-ignore
    const deletedContact = await contactHandlers["/contact/{id}"].delete(newContact)
  }

  return {
    data,
    loadData,
    createContact,
    editContact,
    deleteContact
  }
}