package com.example.backend.repo;

import com.example.backend.model.MyWardrobeDTO;
import com.example.backend.model.MyWardrobeModel;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository


public class MyWardrobeRepo {

    Map<String, MyWardrobeModel> wardrobe = new HashMap<>();

    public List<MyWardrobeModel> getAllProducts() {
        return new ArrayList<>(wardrobe.values());
    }


    public MyWardrobeModel getProductById(String id) {

        return wardrobe.get(id);

    }

    public MyWardrobeModel addProduct(MyWardrobeModel wardrobeModel){
        wardrobe.put(wardrobeModel.getId(), wardrobeModel);
        return wardrobeModel;
    }

    public void deleteProduct(String id) {
        wardrobe.remove(id);
    }

}
