package org.acme.contactify.account;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.security.jpa.RolesValue;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "account_role")
@Getter @Setter @RequiredArgsConstructor
@NoArgsConstructor
public class AccountRole extends PanacheEntity {
    @ManyToMany(mappedBy = "roles")
    private List<Account> accounts;

    @NonNull
    @RolesValue
    private String role;
}
