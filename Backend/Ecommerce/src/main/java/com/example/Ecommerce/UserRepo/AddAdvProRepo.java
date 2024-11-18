package com.example.Ecommerce.UserRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Ecommerce.UserEntity.AddAdvertiserProduct;

@Repository
public interface AddAdvProRepo extends JpaRepository<AddAdvertiserProduct, Integer>{

}
