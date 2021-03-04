package com.heatmapproject.residences.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.heatmapproject.residences.model.Residence;
import com.heatmapproject.residences.repository.ResidenceRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class ResidenceController {
	@Autowired
	private ResidenceRepository residenceRepository;
	
	@GetMapping("/residences")
	public ResponseEntity<List<Residence>> getAllResidences() {
		try {
			List<Residence> residences = new ArrayList<Residence>();
			
			residenceRepository.findAll().forEach(residences::add);
			System.out.println("Residences");
			System.out.println(residences);
			if (residences.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			
			return new ResponseEntity<>(residences, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/residences/{id}")
	public ResponseEntity<Residence> getResidenceById(@PathVariable("id") long id) {
		Optional<Residence> residenceData = residenceRepository.findById(id);
		
		if (residenceData.isPresent()) {
			return new ResponseEntity<>(residenceData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/residences")
	public ResponseEntity<Residence> createResidence(@RequestBody Residence residence) {
		try {
			Residence _residence = residenceRepository.save(
					new Residence(residence.getCEP(), residence.getHouseNumber(), residence.getLatitude(), residence.getLongitude(), residence.getResidentsNumber())
			);
			
			return new ResponseEntity<>(_residence, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/residences/{id}")
	public ResponseEntity<Residence> updateResidence(@PathVariable("id") long id, @RequestBody Residence residence) {
		Optional<Residence> residenceData = residenceRepository.findById(id);
		
		if (residenceData.isPresent()) {
			Residence _residence = residenceData.get();
			
			_residence.setCEP(residence.getCEP());
			_residence.setHouseNumber(residence.getHouseNumber());
			_residence.setLatitude(residence.getLatitude());
			_residence.setLongitude(residence.getLongitude());
			_residence.setResidentsNumber(residence.getResidentsNumber());
			
			return new ResponseEntity<>(residenceRepository.save(_residence), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/residences/{id}")
	public ResponseEntity<HttpStatus> deleteResidence(@PathVariable("id") long id) {
		try {
			residenceRepository.deleteById(id);
			
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/residences")
	public ResponseEntity<HttpStatus> deleteAllResidences() {
		try {
			residenceRepository.deleteAll();
			
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
