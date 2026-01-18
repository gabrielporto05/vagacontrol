package com.vagacontrol.api.dto.response;

import com.vagacontrol.api.entity.enums.Role;

public record RegisterResponse(
        String name,
        String email,
        Role role) {

}
