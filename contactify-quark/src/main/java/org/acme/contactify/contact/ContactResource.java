package org.acme.contactify.contact;

import jakarta.annotation.security.RolesAllowed;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/contact")
@Produces(MediaType.APPLICATION_JSON)
@RequestScoped
@Transactional(Transactional.TxType.REQUIRED)
public class ContactResource {

    @Inject
    ContactService contactService;

    @POST
    @RolesAllowed("USER")
    public Contact createContact(Contact _contact) {
        Contact contact = contactService.storeContact(_contact);
        return contact;
    }

    @PUT
    @RolesAllowed("USER")
    public Response updateContact(Contact _contact) {
        return Response.status(Response.Status.NOT_IMPLEMENTED).build();
    }

    @DELETE
    @RolesAllowed("USER")
    public Response deleteContact(Contact _contact) {
        return Response.status(Response.Status.NOT_IMPLEMENTED).build();
    }

    @GET
    @RolesAllowed("USER")
    public Response listContacts(@QueryParam("search") String _searchQuery) {
        return Response.status(Response.Status.NOT_IMPLEMENTED).build();
    }
}
