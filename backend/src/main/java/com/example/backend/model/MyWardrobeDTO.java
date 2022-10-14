package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class MyWardrobeDTO {

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
