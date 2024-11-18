package com.example.Ecommerce.UserEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ImageUp {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String p_link;
	public ImageUp() {
		super();
	}
	
	
	public ImageUp(int id, String p_link) {
		super();
		this.id = id;
		this.p_link = p_link;
	}


	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getP_link() {
		return p_link;
	}
	public void setP_link(String p_link) {
		this.p_link = p_link;
	}
	

}
