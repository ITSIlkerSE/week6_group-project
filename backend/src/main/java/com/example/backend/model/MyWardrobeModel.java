package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document("products")
public class MyWardrobeModel {

    @Id
    private String id;

    private String name;
    private String image;
    private String size;
    private String description;
    private String price;
    private String category;
    private String brand;
    private float rating;
    private boolean inStock;
}
