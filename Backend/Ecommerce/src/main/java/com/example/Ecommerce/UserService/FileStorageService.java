package com.example.Ecommerce.UserService;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileStorageService {

    @Value("${file.upload-dir}")
    private String uploadDir;

    public String storeFile(MultipartFile file) throws IOException {
        // Create directory if not exists
        File directory = new File(uploadDir);
        if (!directory.exists()) {
            directory.mkdir();
        }

        // Get the file name
        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();

        // Path to store the file
        Path targetLocation = Paths.get(uploadDir).resolve(fileName);

        // Save the file
        Files.copy(file.getInputStream(), targetLocation);

        return fileName;
    }
}
