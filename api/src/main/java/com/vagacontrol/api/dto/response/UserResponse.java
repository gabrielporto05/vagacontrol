package com.vagacontrol.api.dto.response;

import java.time.LocalDateTime;

import com.vagacontrol.api.entity.Role;

public record UserResponse(
        String name,
        String email,
        Role role,
        LocalDateTime createdAt) {
}
