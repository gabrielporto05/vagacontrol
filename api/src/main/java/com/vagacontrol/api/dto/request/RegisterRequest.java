package com.vagacontrol.api.dto.request;

import com.vagacontrol.api.entity.enums.Role;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record RegisterRequest(
        @NotEmpty(message = "Nome é obrigatório")
        String name,
        @NotEmpty(message = "Email é obrigatório")
        String email,
        @NotEmpty(message = "Senha é obrigatória")
        String password,
        @NotNull(message = "Role é obrigatória")
        Role role) {

}
