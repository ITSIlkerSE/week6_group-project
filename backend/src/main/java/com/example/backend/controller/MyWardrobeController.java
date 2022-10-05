package com.example.backend.controller;


import com.example.backend.model.MyWardrobeModel;
import com.example.backend.service.MyWardrobeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wardrobe")

public class MyWardrobeController {

    private final MyWardrobeService service;

    @Autowired
    public MyWardrobeController(MyWardrobeService service) {
        this.service = service;
    }

    @GetMapping
    public List<MyWardrobeModel> getAllProducts() {
        return service.getAllProducts();
    }

    @PostMapping
    public MyWardrobeModel addProduct(@RequestBody MyWardrobeModel product) {
        return service.addProduct(product);
    }

}
