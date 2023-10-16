package org.acme.contactify.account;

import static org.hamcrest.Matchers.is;
import io.quarkus.test.common.http.TestHTTPEndpoint;
import io.quarkus.test.junit.QuarkusTest;
import io.restassured.RestAssured;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.junit.jupiter.api.Test;

@QuarkusTest
@TestHTTPEndpoint(AccountResource.class)
class AccountResourceTest {

    @Test
    void registerUser() {
    }

    @Test
    void shouldFailLoginWithWrongCredentials() {
        RestAssured
                .given()
                    .body(new AuthRequestDTO("wrong", "credentials"))
                    .contentType(MediaType.APPLICATION_JSON)
                .when().post("login")
                .then().statusCode(401);
    }

    @Test
    void pingUser() {
    }
}