package com.vagacontrol.api.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.vagacontrol.api.dto.request.ParkingCreateRequest;
import com.vagacontrol.api.dto.response.ParkingResponse;
import com.vagacontrol.api.entity.Parking;
import com.vagacontrol.api.repository.ParkingRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ParkingService {

    private final ParkingRepository parkingRepository;

    public ParkingResponse create(ParkingCreateRequest request) {

        Parking parking = Parking.builder()
                .name(request.name())
                .address(request.address())
                .totalSpots(request.totalSpots())
                .active(true)
                .build();

        Parking saved = parkingRepository.save(parking);

        return toResponse(saved);
    }

    public List<ParkingResponse> findAll() {
        return parkingRepository.findAll()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public ParkingResponse findById(UUID id) {

        Parking parking = parkingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Estacionamento não encontrado"));

        return toResponse(parking);
    }

    public ParkingResponse update(UUID id, ParkingCreateRequest request) {

        Parking parking = parkingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Estacionamento não encontrado"));

        parking.setName(request.name());
        parking.setAddress(request.address());
        parking.setTotalSpots(request.totalSpots());
        parking.setActive(request.active());

        Parking updated = parkingRepository.save(parking);

        return toResponse(updated);
    }

    public void delete(UUID id) {

        Parking parking = parkingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Estacionamento não encontrado"));

        // Soft delete
        parking.setActive(false);
        parkingRepository.save(parking);
    }

    private ParkingResponse toResponse(Parking parking) {
        return new ParkingResponse(
                parking.getId(),
                parking.getName(),
                parking.getAddress(),
                parking.getTotalSpots(),
                parking.getActive(),
                parking.getCreatedAt());
    }
}
