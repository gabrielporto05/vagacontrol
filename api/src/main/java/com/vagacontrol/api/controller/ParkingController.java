package com.vagacontrol.api.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vagacontrol.api.dto.request.ParkingCreateRequest;
import com.vagacontrol.api.dto.response.ParkingResponse;
import com.vagacontrol.api.service.ParkingService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/parkings")
@RequiredArgsConstructor
public class ParkingController {

    private final ParkingService parkingService;

    @PostMapping
    public ResponseEntity<ParkingResponse> create(
            @Valid @RequestBody ParkingCreateRequest request) {

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(parkingService.create(request));
    }

    @GetMapping
    public ResponseEntity<List<ParkingResponse>> getAll() {
        return ResponseEntity.ok(parkingService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ParkingResponse> getById(@PathVariable UUID id) {
        return ResponseEntity.ok(parkingService.findById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ParkingResponse> update(
            @PathVariable UUID id,
            @Valid @RequestBody ParkingCreateRequest request) {

        return ResponseEntity.ok(parkingService.update(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {

        parkingService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
