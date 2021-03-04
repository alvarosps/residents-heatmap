package com.heatmapproject.residences.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "residences")
public class Residence {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "cep")
	private String cep;
	
	@Column(name = "house_number")
	private String houseNumber;
	
	@Column(name = "latitude")
	private String latitude;
	
	@Column(name = "longitude")
	private String longitude;
	
	@Column(name = "residents_number")
	private String residentsNumber;
	
	public Residence() {
		
	}
	
	public Residence(String cep, String houseNumber, String latitude, String longitude, String residentsNumber) {
		super();
		this.cep = cep;
		this.houseNumber = houseNumber;
		this.latitude = latitude;
		this.longitude = longitude;
		this.residentsNumber = residentsNumber;
	}
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public String getCEP() {
		return cep;
	}
	
	public void setCEP(String cep) {
		this.cep = cep;
	}
	
	public String getHouseNumber() {
		return houseNumber;
	}
	
	public void setHouseNumber(String houseNumber) {
		this.houseNumber = houseNumber;
	}
	
	public String getLatitude() {
		return latitude;
	}
	
	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}
	
	public String getLongitude() {
		return longitude;
	}
	
	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}
	
	public String getResidentsNumber() {
		return residentsNumber;
	}
	
	public void setResidentsNumber(String residentsNumber) {
		this.residentsNumber = residentsNumber;
	}
}
