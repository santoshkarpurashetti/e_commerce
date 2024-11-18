package com.example.Ecommerce.UserController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Ecommerce.UserEntity.AddAdvertiserProduct;
import com.example.Ecommerce.UserEntity.User;
import com.example.Ecommerce.UserService.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
	@Autowired
	private UserService userSrService;
	
	@PostMapping("/ResisterUser")
	public String AddDetails(@RequestBody User user)
	{
		return userSrService.saveDetails(user);
	}
//	@GetMapping("/getUser")
//	public List<User> GetAllDetails() {
//		return userSrService.getDetails();
//	}
	
	@PostMapping("/AddAdvertiserProduct")
	public AddAdvertiserProduct AddAdvProducts(@RequestBody AddAdvertiserProduct addAdvertiserProduct) {
		
		return userSrService.SaveProductDetails(addAdvertiserProduct);
		
	}
	@GetMapping("/GetAdvProduct")
	public List<AddAdvertiserProduct> geAdvProductDetails() {
		return userSrService.getAdvPrdEtails();
		
	}
	
	

}
