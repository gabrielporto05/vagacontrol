package com.vagacontrol.api.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ParkingCreateRequest(
        @NotBlank(message = "Nome é obrigatório")
        String name,
        @NotBlank(message = "Endereço é obrigatório")
        String address,
        @NotNull(message = "Total de vagas é obrigatório")
        Integer totalSpots,
        Boolean active
        ) {

}
