package com.vagacontrol.api.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vagacontrol.api.dto.response.ApiResponse;
import com.vagacontrol.api.dto.response.UserResponse;
import com.vagacontrol.api.repository.UserRepository;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<UserResponse>>> getAllUsers() {

        List<UserResponse> users = userRepository.findAll()
                .stream()
                .map(user -> new UserResponse(
                        user.getName(),
                        user.getEmail(),
                        user.getRole(),
                        user.getCreatedAt()))
                .toList();

        return ResponseEntity.ok(
                new ApiResponse<>(
                        "Usuários retornados com sucesso",
                        users));
    }

}
