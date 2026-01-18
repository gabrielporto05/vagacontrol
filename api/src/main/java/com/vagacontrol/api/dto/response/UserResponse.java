package com.vagacontrol.api.dto.response;

import java.time.LocalDateTime;
import java.util.UUID;

import com.vagacontrol.api.entity.enums.Role;

public record UserResponse(
        UUID id,
        String name,
        String email,
        Role role,
        LocalDateTime createdAt) {

}
