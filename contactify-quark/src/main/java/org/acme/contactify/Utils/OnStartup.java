package org.acme.contactify.Utils;

import jakarta.enterprise.event.Observes;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;
import jakarta.transaction.Transactional;

import io.quarkus.runtime.StartupEvent;
import org.acme.contactify.account.Account;
import org.acme.contactify.account.AccountRole;
import org.acme.contactify.account.AccountService;

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

        accountService.createUser(account);
    }
}