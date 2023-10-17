package org.acme.contactify.contact;

import io.netty.util.internal.StringUtil;
import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.json.bind.annotation.JsonbTransient;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Query;
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

    public static List<Contact> search(String _query, Account _owner) {
        if (StringUtil.isNullOrEmpty(_query)) {
            return findByOwnerId(_owner);
        }
        Query q = getEntityManager().createNativeQuery("select * from contact where owner_id = :ownerId and to_tsvector(firstName||' '||lastName||' '||phoneNumber||' '||email) @@ to_tsquery(:query)", Contact.class);
        q.setParameter("ownerId", _owner.id);
        q.setParameter("query", _query);
        return q.getResultList();
    }
}
