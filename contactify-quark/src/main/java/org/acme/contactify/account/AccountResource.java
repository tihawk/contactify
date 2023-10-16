package org.acme.contactify.account;

import io.netty.util.internal.StringUtil;
import jakarta.annotation.security.PermitAll;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.SecurityContext;
import org.jboss.logging.Logger;

@Path("/user")
@Produces(MediaType.APPLICATION_JSON)
@RequestScoped
@Transactional(Transactional.TxType.REQUIRED)
public class AccountResource {

    private final static Logger logger = Logger.getLogger(AccountResource.class);

    @Inject
    AccountService accountService;


    @POST
    @Path("/register")
    @PermitAll
    public Account registerUser(Account _account) {
        return accountService.createUser(_account);
    }

    @POST
    @Path("/login")
    @PermitAll
    @Produces(MediaType.TEXT_PLAIN)
    public Response login(AuthRequestDTO _authRequest) {
        String token = accountService.login(_authRequest);
        if (StringUtil.isNullOrEmpty(token)) {
            return Response.status(Response.Status.UNAUTHORIZED).build();
        }
        return Response.ok(token).build();
    }

    @GET
    @Path("/ping")
    @PermitAll
    @Produces(MediaType.TEXT_PLAIN)
    public String pingUser(@Context SecurityContext _ctx) {
        return accountService.getResponseString(_ctx);
    }
}
