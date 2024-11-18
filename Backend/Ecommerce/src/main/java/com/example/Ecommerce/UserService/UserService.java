package com.example.Ecommerce.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Ecommerce.UserEntity.AddAdvertiserProduct;
import com.example.Ecommerce.UserEntity.User;
import com.example.Ecommerce.UserRepo.AddAdvProRepo;
import com.example.Ecommerce.UserRepo.UserRepo;

@Service
public class UserService {
	@Autowired
	private UserRepo userRepo;
	@Autowired
	private AddAdvProRepo addAdvProRepo;
	
	
	public String saveDetails(User user)
	{
		if(user.getName().isBlank() && user.getLast_name().isBlank()&&user.getPassword().isEmpty())
		{
			return "Should not emptry";
		}
		else
		{
			userRepo.save(user);
			return "";
		}
		
	}
//	public List<User> getDetails() {
//		List<User> usres= userRepo.findAll();
////		usres.stream().map(user->mapToUserResopnce())
//		
//	}
	
	public AddAdvertiserProduct SaveProductDetails(AddAdvertiserProduct addAdvertiserProduct) {
		return addAdvProRepo.save(addAdvertiserProduct);
		
	}
	public List<AddAdvertiserProduct> getAdvPrdEtails()
	{
		return addAdvProRepo.findAll();
	}

}
