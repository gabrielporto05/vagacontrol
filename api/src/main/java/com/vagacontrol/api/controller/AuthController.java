package com.vagacontrol.api.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vagacontrol.api.config.TokenConfig;
import com.vagacontrol.api.dto.request.LoginRequest;
import com.vagacontrol.api.dto.request.RegisterRequest;
import com.vagacontrol.api.dto.response.LoginResponse;
import com.vagacontrol.api.dto.response.RegisterResponse;
import com.vagacontrol.api.entity.User;
import com.vagacontrol.api.repository.UserRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final TokenConfig tokenConfig;

    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder,
            AuthenticationManager authenticationManager, TokenConfig tokenConfig) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.tokenConfig = tokenConfig;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest loginRequest) {

        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                loginRequest.email(),
                loginRequest.password());

        Authentication authentication = authenticationManager.authenticate(authToken);

        User user = (User) authentication.getPrincipal();

        String token = tokenConfig.generateToken(user);

        return ResponseEntity.ok(new LoginResponse("Login realizado com sucesso", token));
    }

    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(@Valid @RequestBody RegisterRequest registerRequest) {

        User newUser = new User();

        newUser.setName(registerRequest.name());
        newUser.setEmail(registerRequest.email());
        newUser.setPassword(passwordEncoder.encode(registerRequest.password()));
        newUser.setRole(registerRequest.role());

        userRepository.save(newUser);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new RegisterResponse(
                        newUser.getName(),
                        newUser.getEmail(),
                        newUser.getRole()));
    }

}
