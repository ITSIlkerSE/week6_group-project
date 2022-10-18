package com.example.backend.controller;

import com.example.backend.model.MyWardrobeModel;
import com.example.backend.repo.MyWardrobeRepo;
import com.example.backend.service.IdService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@AutoConfigureMockMvc

class MyWardrobeControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private MyWardrobeRepo myWardrobeRepo;

    @MockBean
    private IdService idService;

    @Test
    void addProduct() throws Exception {

        //GIVEN
        when(idService.generateId()).thenReturn("1");

        String requestBody = """
                {
                        
                        "name": "jacke",
                        "image": "bild",
                        "size" : "xl",
                        "description":"schön",
                        "price": "25",
                        "category": "top",
                        "brand": "nike",
                        "rating": 5,
                        "inStock": true
                }
                """;

        String expectedJSON = """
                {
                        "id":"1",
                        "name": "jacke",
                        "image": "bild",
                        "size" : "xl",
                        "description":"schön",
                        "price": "25",
                        "category": "top",
                        "brand": "nike",
                        "rating": 5,
                        "inStock": true
                }
                """;

        //WHEN+THEN
        mockMvc.perform(
                        post("/api/wardrobe")
                                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                                .content(requestBody))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));

    }


    @Test
    void getAllMovies() throws Exception {
        //GIVEN
        myWardrobeRepo.save(new MyWardrobeModel("1", "jacke", "bild", "xl", "schön", "25", "top", "nike", 5, true));
        myWardrobeRepo.save(new MyWardrobeModel("2", "jackee", "bild", "xl", "schön", "25", "top", "nike", 5, true));


        //WHEN &THEN
        String expectedJSON = """
                [
                    {
                        "id":"1",
                        "name": "jacke",
                        "image": "bild",
                        "size" : "xl",
                        "description":"schön",
                        "price": "25",
                        "category": "top",
                        "brand": "nike",
                        "rating": 5,
                        "inStock": true
        
                    },
                    {
                        "id":"2",
                        "name": "jackee",
                        "image": "bild",
                        "size" : "xl",
                        "description":"schön",
                        "price": "25",
                        "category": "top",
                        "brand": "nike",
                        "rating": 5,
                        "inStock": true
                    }
                ]
                """;
        //WHEN+THEN
        mockMvc.perform(get("/api/wardrobe"))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));

    }
}
