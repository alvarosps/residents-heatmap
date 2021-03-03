package com.heatmapproject.residences.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.heatmapproject.residences.model.Residence;
import com.heatmapproject.residences.repository.ResidenceRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class ResidenceController {
	@Autowired
	private ResidenceRepository residenceRepository;
	
	@GetMapping("residences")
	public List < Residence > getResidences() {
		return this.residenceRepository.findAll();
	}
}
