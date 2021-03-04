package com.heatmapproject.residences;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.heatmapproject.residences.model.Residence;
import com.heatmapproject.residences.repository.ResidenceRepository;

@SpringBootApplication
public class ResidencesApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ResidencesApplication.class, args);
	}
	
	@Autowired
	private ResidenceRepository residenceRepository;
	
	@Override
	public void run(String...args) throws Exception {
		this.residenceRepository.save(new Residence("90640002", "1311", "-30.048183", "-51.200013", "10"));
		this.residenceRepository.save(new Residence("90620110", "1584", "-30.047477", "-51.202631", "20"));
		this.residenceRepository.save(new Residence("90470440", "550", "-30.047254", "-51.204776", "30"));
		this.residenceRepository.save(new Residence("90610010", "480", "-30.049149", "-51.200485", "40"));
		this.residenceRepository.save(new Residence("90610200", "709", "-30.049335", "-51.198167", "50"));
		this.residenceRepository.save(new Residence("90620130", "909", "-30.050598", "-51.204090", "100"));
		this.residenceRepository.save(new Residence("90620040", "355", "-30.046697", "-51.199970", "10"));
		this.residenceRepository.save(new Residence("90620130", "998", "-30.051489", "-51.203618", "20"));
		this.residenceRepository.save(new Residence("90630090", "467", "-30.047737", "-51.194648", "200"));
		this.residenceRepository.save(new Residence("90620230", "580", "-30.053384", "-51.195635", "50"));
		this.residenceRepository.save(new Residence("90450190", "501", "-30.043279", "-51.196365", "5"));
		this.residenceRepository.save(new Residence("90040372", "1332", "-30.049037", "-51.207051", "75"));
		this.residenceRepository.save(new Residence("90650002", "867", "-30.053272", "-51.203789", "30"));
	}
}
