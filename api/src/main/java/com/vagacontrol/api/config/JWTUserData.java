package com.vagacontrol.api.config;

import java.util.UUID;

import lombok.Builder;

@Builder
public record JWTUserData(UUID userId, String email) {

}
