package com.example.Ecommerce.UserController;


import com.example.Ecommerce.UserService.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/images")
public class FileUploadController {

    @Autowired
    private FileStorageService fileStorageService;

    // Endpoint to handle image upload
    @PostMapping("/upload")
    public ResponseEntity<UploadFileResponse> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
        String fileName = fileStorageService.storeFile(file);

        // Assuming that you save the file path or URL to a database, or return the file name.
        String fileDownloadUri = "http://localhost:8080/uploads/" + fileName;

        return ResponseEntity.ok(new UploadFileResponse(fileName, fileDownloadUri));
    }
}
