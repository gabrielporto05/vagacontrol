package com.vagacontrol.api.config;

import java.io.IOException;

import org.apache.logging.log4j.util.Strings;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.vagacontrol.api.entity.User;
import com.vagacontrol.api.repository.UserRepository;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class SecurityFilter extends OncePerRequestFilter {

    private final TokenConfig tokenConfig;
    private final UserRepository userRepository;

    public SecurityFilter(TokenConfig tokenConfig, UserRepository userRepository) {
        this.tokenConfig = tokenConfig;
        this.userRepository = userRepository;
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws IOException, ServletException {

        String authHeader = request.getHeader("Authorization");

        if (Strings.isNotEmpty(authHeader) && authHeader.startsWith("Bearer ")) {

            String token = authHeader.substring(7);

            tokenConfig.validateToken(token).ifPresent(jwtData -> {

                User user = userRepository
                        .findById(jwtData.userId())
                        .orElse(null);

                if (user != null) {

                    UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                            user,
                            null,
                            user.getAuthorities());

                    SecurityContextHolder
                            .getContext()
                            .setAuthentication(authentication);
                }
            });
        }

        filterChain.doFilter(request, response);
    }
}
