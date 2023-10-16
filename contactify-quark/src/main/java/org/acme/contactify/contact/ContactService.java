package org.acme.contactify.contact;

import jakarta.enterprise.context.RequestScoped;
import org.acme.contactify.MultipleResults;

@RequestScoped
public class ContactService {

    public Contact storeContact(Contact _contact) {
        Contact dbContact = new Contact();
        updateContact(dbContact, _contact);
        dbContact.persist();
        return dbContact;
    }

    public MultipleResults<Contact> listContactsByUser(String _user) {
        // TODO find user id
        return null;
    }

    private void updateContact(Contact dbContact, Contact inputContact) {

    }
}
