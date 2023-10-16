package org.acme.contactify.account;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.security.jpa.Password;
import io.quarkus.security.jpa.Roles;
import io.quarkus.security.jpa.UserDefinition;
import io.quarkus.security.jpa.Username;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "account")
@UserDefinition
@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class Account extends PanacheEntity {

    @Username
    private String username;
    @Password
    private String password;
    @Roles
    @ManyToMany
    private Set<AccountRole> roles = new HashSet<>();

    // this is just an example, you can load the user from the database (via PanacheEntityBase)
    public static Account findByUsername(String username) {

        //if using Panache pattern (extends or PanacheEntity PanacheEntityBase)
        return find("username", username).firstResult();
    }

}