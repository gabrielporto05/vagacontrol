package com.vagacontrol.api.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vagacontrol.api.entity.Parking;

@Repository
public interface ParkingRepository extends JpaRepository<Parking, UUID> {

}
