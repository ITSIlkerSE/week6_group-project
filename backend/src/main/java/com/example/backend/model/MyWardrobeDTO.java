package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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

}
