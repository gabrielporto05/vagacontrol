package com.vagacontrol.api.service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.vagacontrol.api.config.SecurityUtils;
import com.vagacontrol.api.dto.request.ParkingCreateRequest;
import com.vagacontrol.api.dto.response.ParkingResponse;
import com.vagacontrol.api.entity.Parking;
import com.vagacontrol.api.entity.Role;
import com.vagacontrol.api.entity.User;
import com.vagacontrol.api.repository.ParkingRepository;
import com.vagacontrol.api.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ParkingService {

    private final ParkingRepository parkingRepository;
    private final UserRepository userRepository;

    public ParkingResponse create(ParkingCreateRequest request) {

        User loggedUser = SecurityUtils.getAuthenticatedUser();
        User owner;

        switch (loggedUser.getRole()) {

            case ADMIN -> {

                if (request.ownerId() == null) {
                    throw new RuntimeException("ADMIN deve informar o ownerId");
                }

                owner = userRepository.findById(request.ownerId())
                        .orElseThrow(() -> new RuntimeException("Proprietário não encontrado"));

                if (owner.getRole() != Role.PROPRIETARIO) {
                    throw new RuntimeException("Owner precisa ser um PROPRIETÁRIO");
                }
            }

            case PROPRIETARIO ->
                owner = loggedUser;

            default ->
                throw new RuntimeException("Perfil não autorizado a criar estacionamento");
        }

        Parking parking = Parking.builder()
                .name(request.name())
                .address(request.address())
                .totalSpots(request.totalSpots())
                .active(true)
                .owner(owner)
                .build();

        Parking saved = parkingRepository.save(parking);

        return toResponse(saved);
    }

    public List<ParkingResponse> findAll() {
        User loggedUser = SecurityUtils.getAuthenticatedUser();

        List<Parking> parkings = (loggedUser.getRole() == Role.ADMIN)
                ? parkingRepository.findAll()
                : parkingRepository.findByOwner(loggedUser);

        return parkings.stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    public ParkingResponse findById(UUID id) {

        User loggedUser = SecurityUtils.getAuthenticatedUser();

        Parking parking = parkingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Estacionamento não encontrado"));

        if (loggedUser.getRole() == Role.PROPRIETARIO
                && !parking.getOwner().getId().equals(loggedUser.getId())) {

            throw new RuntimeException("Acesso negado ao estacionamento");
        }

        return toResponse(parking);
    }

    public ParkingResponse update(UUID id, ParkingCreateRequest request) {

        User loggedUser = SecurityUtils.getAuthenticatedUser();

        Parking parking = parkingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Estacionamento não encontrado"));

        if (loggedUser.getRole() == Role.PROPRIETARIO
                && !parking.getOwner().getId().equals(loggedUser.getId())) {

            throw new RuntimeException("Você não pode alterar este estacionamento");
        }

        parking.setName(request.name());
        parking.setAddress(request.address());
        parking.setTotalSpots(request.totalSpots());
        parking.setActive(request.active());

        return toResponse(parkingRepository.save(parking));
    }

    public void delete(UUID id) {

        User loggedUser = SecurityUtils.getAuthenticatedUser();

        Parking parking = parkingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Estacionamento não encontrado"));

        if (loggedUser.getRole() == Role.PROPRIETARIO
                && !parking.getOwner().getId().equals(loggedUser.getId())) {

            throw new RuntimeException("Você não pode remover este estacionamento");
        }

        parking.setActive(false);
        parkingRepository.save(parking);
    }

    private ParkingResponse toResponse(Parking parking) {
        return new ParkingResponse(
                parking.getId(),
                parking.getOwner().getId(),
                parking.getName(),
                parking.getAddress(),
                parking.getTotalSpots(),
                parking.getActive(),
                parking.getCreatedAt());
    }
}
