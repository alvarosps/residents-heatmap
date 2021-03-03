package com.heatmapproject.residences.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.heatmapproject.residences.model.Residence;

@Repository
public interface ResidenceRepository extends JpaRepository<Residence, Long> {

}
