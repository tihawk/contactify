package org.acme.contactify.contact;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.json.bind.annotation.JsonbTransient;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.*;
import org.acme.contactify.account.Account;

import java.util.List;

@Entity
@Table(name = "contact")
@Getter @Setter @AllArgsConstructor @RequiredArgsConstructor @NoArgsConstructor
@Builder(toBuilder = true)
public class Contact extends PanacheEntity {
    @NonNull
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String email;
    @ManyToOne(optional = false)
    @JsonbTransient
    private Account owner;

    public static List<Contact> findByOwnerId(Account _owner) {
        return list("owner", _owner);
    }
}
