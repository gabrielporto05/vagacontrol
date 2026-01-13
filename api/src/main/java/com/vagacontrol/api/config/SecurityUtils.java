package com.vagacontrol.api.config;

import org.springframework.security.core.context.SecurityContextHolder;

import com.vagacontrol.api.entity.User;

public class SecurityUtils {

    public static User getAuthenticatedUser() {
        return (User) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
    }
}
