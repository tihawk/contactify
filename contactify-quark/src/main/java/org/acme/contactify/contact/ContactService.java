package org.acme.contactify.contact;

import jakarta.enterprise.context.RequestScoped;
import org.acme.contactify.MultipleResults;
import org.acme.contactify.account.Account;
import org.jboss.logging.Logger;

import java.util.List;

@RequestScoped
public class ContactService {
    final private static Logger logger = Logger.getLogger(ContactService.class);

    public Contact storeContact(Contact _contact, String _subject) {
        Account owner = Account.findByUsername(_subject);
        if (owner == null) {
            return null;
        }
        Contact dbContact = _contact.toBuilder().owner(owner).build();
        dbContact.persist();
        return dbContact;
    }

    public Contact updateContact(Contact _contact, String _subject) {
        logger.debug("[updateContact] id " + _contact.id);
        Contact dbContact = Contact.findById(Long.valueOf(_contact.id));
        if (dbContact == null) {
            // contact doesn't exist
            logger.debug("[updateContact] contact doesn't exist");
            return null;
        }
        if (!dbContact.getOwner().getUsername().equals(_subject)) {
            // non-owner attemtping to edit contact
            logger.debug("[updateContact] owner of contact and requester are different people");
            return null;
        }

        dbContact.setFirstName(_contact.getFirstName());
        dbContact.setLastName(_contact.getLastName());
        dbContact.setPhoneNumber(_contact.getPhoneNumber());
        dbContact.setEmail(_contact.getEmail());

        return dbContact;
    }

    public Contact deleteContact(Contact _contact, String _subject) {
        Contact dbContact = Contact.findById(_contact.id);
        if (dbContact == null) {
            // contact doesn't exist
            return null;
        }
        if (!dbContact.getOwner().getUsername().equals(_subject)) {
            // non-owner attemtping to delete contact
            return null;
        }

        dbContact.delete();
        return dbContact;
    }

    public List<Contact> listContactsByUser(String _subject) {
        Account owner = Account.find("username", _subject).firstResult();
        return Contact.findByOwnerId(owner);
    }
}
