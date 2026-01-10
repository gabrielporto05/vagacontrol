package com.vagacontrol.api.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.vagacontrol.api.config.TokenConfig;
import com.vagacontrol.api.dto.request.LoginRequest;
import com.vagacontrol.api.dto.request.RegisterRequest;
import com.vagacontrol.api.dto.response.LoginResponse;
import com.vagacontrol.api.dto.response.RegisterResponse;
import com.vagacontrol.api.entity.User;
import com.vagacontrol.api.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final TokenConfig tokenConfig;

    public LoginResponse login(LoginRequest request) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.email(),
                        request.password()));

        User user = (User) authentication.getPrincipal();
        String token = tokenConfig.generateToken(user);

        return new LoginResponse("Login realizado com sucesso", token);
    }

    public RegisterResponse register(RegisterRequest request) {

        User user = new User();
        user.setName(request.name());
        user.setEmail(request.email());
        user.setPassword(passwordEncoder.encode(request.password()));
        user.setRole(request.role());

        userRepository.save(user);

        return new RegisterResponse(
                user.getName(),
                user.getEmail(),
                user.getRole());
    }
}
