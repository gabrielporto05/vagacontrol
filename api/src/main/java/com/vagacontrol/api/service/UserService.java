package com.vagacontrol.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.vagacontrol.api.dto.response.UserResponse;
import com.vagacontrol.api.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<UserResponse> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(user -> new UserResponse(
                        user.getName(),
                        user.getEmail(),
                        user.getRole(),
                        user.getCreatedAt()))
                .toList();
    }
}
