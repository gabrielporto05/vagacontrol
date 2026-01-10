package com.vagacontrol.api.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vagacontrol.api.dto.response.ApiResponse;
import com.vagacontrol.api.dto.response.UserResponse;
import com.vagacontrol.api.service.UserService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<UserResponse>>> getAllUsers() {

        return ResponseEntity
                .ok(new ApiResponse<>("Usuários retornados com sucesso", userService.getAllUsers()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<UserResponse>> getUserById(@Valid @PathVariable UUID id) {

        return ResponseEntity
                .ok(new ApiResponse<>("Usuário retornado com sucesso", userService.getUserById(id)));
    }

}
