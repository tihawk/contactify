package org.acme.contactify.account;

import io.quarkus.elytron.security.common.BcryptUtil;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.InternalServerErrorException;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.SecurityContext;
import org.acme.contactify.Utils.JWToken;
import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.eclipse.microprofile.jwt.JsonWebToken;

@RequestScoped
public class AccountService {

    @Inject
    JsonWebToken jwt;
    @ConfigProperty(name = "org.acme.contactify.jwt.duration") public Long duration;
    @ConfigProperty(name = "mp.jwt.verify.issuer") public String issuer;
    public Account createUser(Account _account) {
        Account dbAccount = new Account();
        dbAccount.setUsername(_account.getUsername());
        dbAccount.setPassword(encryptPassword(_account.getPassword()));
        dbAccount.setRoles(_account.getRoles());
        dbAccount.persist();
        return dbAccount;
    }
    
    public String login(AuthRequestDTO authRequest) {
        Account u = Account.findByUsername(authRequest.getUsername());
        if (u != null && u.getPassword().equals(encryptPassword(authRequest.getPassword()))) {
            try {
                return JWToken.generateToken(u.getUsername(), u.getRoles(), duration, issuer);
            } catch (Exception e) {
                return null;
            }
        } else {
            return null;
        }
    }

    public String getResponseString(SecurityContext ctx) {
        String name;
        if (ctx.getUserPrincipal() == null) {
            name = "anonymous";
        } else if (!ctx.getUserPrincipal().getName().equals(jwt.getName())) {
            throw new InternalServerErrorException("Principal and JsonWebToken names do not match");
        } else {
            name = ctx.getUserPrincipal().getName();
        }
        return String.format("hello + %s,"
                        + " isHttps: %s,"
                        + " authScheme: %s,"
                        + " hasJWT: %s",
                name, ctx.isSecure(), ctx.getAuthenticationScheme(), hasJwt());
    }

    private boolean hasJwt() {
        return jwt.getClaimNames() != null;
    }

    public String encryptPassword(String clearPassword) {
        byte[] salt = "SALTISOVERHMMMWE".getBytes();
        return BcryptUtil.bcryptHash(clearPassword, 5, salt);
    }
}
