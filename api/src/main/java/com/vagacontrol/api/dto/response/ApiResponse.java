package com.vagacontrol.api.dto.response;

public record ApiResponse<T>(
        String message,
        T data) {

}
