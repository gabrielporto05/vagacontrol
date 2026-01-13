package com.vagacontrol.api.dto.response;

import java.time.LocalDateTime;
import java.util.UUID;

public record ParkingResponse(
        UUID id,
        UUID ownerId,
        String name,
        String address,
        Integer totalSpots,
        Boolean active,
        LocalDateTime createdAt
        ) {

}
