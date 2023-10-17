package org.acme.contactify.Utils;

import jakarta.enterprise.event.Observes;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;
import jakarta.transaction.Transactional;

import io.quarkus.runtime.StartupEvent;
import org.acme.contactify.account.Account;
import org.acme.contactify.account.AccountRole;
import org.acme.contactify.account.AccountService;
import org.acme.contactify.contact.Contact;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;


@Singleton
public class OnStartup {

    @Inject
    AccountService accountService;
    @Transactional
    public void loadUsers(@Observes StartupEvent evt) {
        // reset and load all test users
        Account.deleteAll();
        AccountRole.deleteAll();
        AccountRole userRole = new AccountRole("USER");
        userRole.persist();

        Account account = new Account("user", "user", Collections.singleton(userRole));

        account = accountService.createUser(account);

        Contact contact = new Contact();
        contact.setFirstName("Bob");
        contact.setLastName("Skellington");
        contact.setEmail("Bob.Skellington@lolbit.lol");
        contact.setOwner(account);
        contact.persist();

        contact = new Contact();
        contact.setFirstName("Bobbie");
        contact.setLastName("Skellington");
        contact.setPhoneNumber("+1235486325");
        contact.setEmail("Bob.Skellington@lolbit.lol");
        contact.setOwner(account);
        contact.persist();
    }
}