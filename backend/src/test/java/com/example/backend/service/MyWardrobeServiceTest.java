package com.example.backend.service;

import com.example.backend.model.MyWardrobeModel;
import com.example.backend.repo.MyWardrobeRepo;
import io.netty.util.internal.ObjectPool;
import net.bytebuddy.dynamic.DynamicType;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class MyWardrobeServiceTest {

    private final MyWardrobeRepo repo = mock(MyWardrobeRepo.class);
    private final IdService idService = mock(IdService.class);
    private final MyWardrobeService service = new MyWardrobeService(repo, idService);



        @Test
        void getAllProducts() {

            //GIVEN
            MyWardrobeModel model1 = new MyWardrobeModel("1", "jacke", "bild", "xl", "schön", "25", "top", "nike", 5, true);
            MyWardrobeModel model2 = new MyWardrobeModel("2", "Hose", "bild", "xl", "schön", "25", "top", "nike", 5, true);
            MyWardrobeModel model3 = new MyWardrobeModel("3", "Shirt", "bild", "xl", "schön", "25", "top", "nike", 5, true);

            when(repo.findAll())
                    .thenReturn(List.of(model1, model2, model3));

                            //WHEN
            List<MyWardrobeModel> actual = service.getAllProducts();
                            //THEN
            List<MyWardrobeModel> expected = List.of(model1, model2, model3);
            verify(repo).findAll();
            assertEquals(expected, actual);
        }



    @Test
    void getProductById() {

        MyWardrobeModel model1 = new MyWardrobeModel("1", "jacke", "bild", "xl", "schön", "25", "top", "nike", 5, true);
        MyWardrobeModel model2 = new MyWardrobeModel("2", "Hose", "bild", "xl", "schön", "25", "top", "nike", 5, true);
        MyWardrobeModel model3 = new MyWardrobeModel("3", "Shirt", "bild", "xl", "schön", "25", "top", "nike", 5, true);


        //GIVEN

        when(repo.findById("1"))
                .thenReturn(Optional.of(model1));

        //WHEN

        Optional<MyWardrobeModel> actual = repo.findById("1");

        //THEN
        Optional<MyWardrobeModel> expected = Optional.of(model1);
        verify(repo).findById("1");
        assertEquals(expected, actual);
    }


    @Test
    void addProduct() {
        //Given
        MyWardrobeModel product = new MyWardrobeModel(
                "1",
                "Kid",
                "https://www.cinematerial.com/media/box-office/499549.jpg",
                "45",
                "action",
                "men",
                "happy",
                "top",
                5,
                false);
        when(repo.save(product)).thenReturn(product);

        //When
        MyWardrobeModel actual = service.addProduct(product);

        //Then
        verify(repo).save(product);
        assertEquals(product, actual);
    }


    @Test
    void deleteProduct() {

        MyWardrobeModel model1 = new MyWardrobeModel("1", "jacke", "bild", "xl", "schön", "25", "top", "nike", 5, true);
        MyWardrobeModel model2 = new MyWardrobeModel("2", "Hose", "bild", "xl", "schön", "25", "top", "nike", 5, true);
        MyWardrobeModel model3 = new MyWardrobeModel("3", "Shirt", "bild", "xl", "schön", "25", "top", "nike", 5, true);

        //Given
        when(repo.findById("1")).thenReturn(Optional.ofNullable(model1));

        //When
        service.deleteProduct("1");

        //Then
        verify(repo).deleteById("1");

    }

    @Test
    void updateProduct() {

        MyWardrobeModel model1 = new MyWardrobeModel("1", "jacke", "bild", "xl", "schön", "25", "top", "nike", 5, true);

        when(service.updateProduct("1", model1)).thenReturn(model1);
        when(repo.existsById("1")).thenReturn(true);

        MyWardrobeModel actual = service.updateProduct("1", model1);

        assertEquals(model1, actual);
    }
}
