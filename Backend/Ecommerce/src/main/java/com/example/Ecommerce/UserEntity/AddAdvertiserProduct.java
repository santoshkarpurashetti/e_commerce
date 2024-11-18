package com.example.Ecommerce.UserEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class AddAdvertiserProduct {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String p_name;
	private String p_description;
	private String p_price;
	private String p_brand_name;
	private String p_platform;
	private String p_link;
	@Lob
	private byte[] p_image;
	public AddAdvertiserProduct() {
		super();
	}
	public AddAdvertiserProduct(int id, String p_name, String p_description, String p_price, String p_brand_name,
			String p_platform, String p_link, byte[] p_image) {
		super();
		this.id = id;
		this.p_name = p_name;
		this.p_description = p_description;
		this.p_price = p_price;
		this.p_brand_name = p_brand_name;
		this.p_platform = p_platform;
		this.p_link = p_link;
		this.p_image = p_image;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getP_name() {
		return p_name;
	}
	public void setP_name(String p_name) {
		this.p_name = p_name;
	}
	public String getP_description() {
		return p_description;
	}
	public void setP_description(String p_description) {
		this.p_description = p_description;
	}
	public String getP_price() {
		return p_price;
	}
	public void setP_price(String p_price) {
		this.p_price = p_price;
	}
	public String getP_brand_name() {
		return p_brand_name;
	}
	public void setP_brand_name(String p_brand_name) {
		this.p_brand_name = p_brand_name;
	}
	public String getP_platform() {
		return p_platform;
	}
	public void setP_platform(String p_platform) {
		this.p_platform = p_platform;
	}
	public String getP_link() {
		return p_link;
	}
	public void setP_link(String p_link) {
		this.p_link = p_link;
	}
	public byte[] getP_image() {
		return p_image;
	}
	public void setP_image(byte[] p_image) {
		this.p_image = p_image;
	}
	
	
	

}
