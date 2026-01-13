package com.vagacontrol.api.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vagacontrol.api.entity.Parking;
import com.vagacontrol.api.entity.User;

@Repository
public interface ParkingRepository extends JpaRepository<Parking, UUID> {

    List<Parking> findByOwner(User owner);

}
