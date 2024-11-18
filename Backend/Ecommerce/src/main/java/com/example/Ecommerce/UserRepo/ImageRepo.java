package com.example.Ecommerce.UserRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Ecommerce.UserEntity.ImageUp;

@Repository
public interface ImageRepo extends JpaRepository<ImageUp, Integer>{

}
