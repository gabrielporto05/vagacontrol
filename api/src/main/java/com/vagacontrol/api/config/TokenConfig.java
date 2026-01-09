package com.vagacontrol.api.config;

import java.time.Instant;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Component;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.vagacontrol.api.entity.User;

@Component
public class TokenConfig {

    private String secretKey = "mySuperSecretKey12345";

    public String generateToken(User user) {

        Algorithm algorithm = Algorithm.HMAC256(secretKey);

        return JWT.create()
                .withClaim("userId", user.getId().toString())
                .withSubject(user.getEmail())
                .withExpiresAt(Instant.now().plusSeconds(3600))
                .withIssuedAt(Instant.now())
                .sign(algorithm);
    }

    public Optional<JWTUserData> validateToken(String token) {

        try {
            Algorithm algorithm = Algorithm.HMAC256(secretKey);

            DecodedJWT decode = JWT.require(algorithm)
                    .build()
                    .verify(token);

            String userId = decode.getClaim("userId").asString();

            return Optional.of(
                    JWTUserData.builder()
                            .userId(UUID.fromString(userId))
                            .email(decode.getSubject())
                            .build());

        } catch (JWTVerificationException e) {
            return Optional.empty();
        }

    }

}
