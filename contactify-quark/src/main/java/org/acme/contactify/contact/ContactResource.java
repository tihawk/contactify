package org.acme.contactify.contact;

import jakarta.annotation.security.RolesAllowed;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.eclipse.microprofile.jwt.Claim;
import org.eclipse.microprofile.jwt.Claims;
import org.jboss.logging.Logger;

import java.util.List;

@Path("/contact")
@Produces(MediaType.APPLICATION_JSON)
@RequestScoped
@Transactional(Transactional.TxType.REQUIRED)
public class ContactResource {
    final private static Logger logger = Logger.getLogger(ContactResource.class);

    @Inject
    ContactService contactService;
    @Inject
    @Claim(standard = Claims.sub)
    String subject;

    @POST
    @RolesAllowed("USER")
    @Consumes(MediaType.APPLICATION_JSON)
    public Contact createContact(Contact _contact) {
        Contact contact = contactService.storeContact(_contact, subject);
        return contact;
    }

    @PUT
    @RolesAllowed("USER")
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/{id}")
    public Contact updateContact(@PathParam("id") Long id, Contact _contact) {
        Contact contact = contactService.updateContact(_contact, subject);
        return contact;
    }

    @DELETE
    @RolesAllowed("USER")
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/{id}")
    public Contact deleteContact(@PathParam("id") Long id, Contact _contact) {
        Contact contact = contactService.deleteContact(_contact, subject);
        return contact;
    }

    @GET
    @RolesAllowed("USER")
    public List<Contact> listContacts(@QueryParam("search") String _searchQuery) {
        return contactService.listContactsByUser(_searchQuery, subject);
    }
}
