package com.example.backend.service;
import com.example.backend.model.MyWardrobeModel;
import com.example.backend.repo.MyWardrobeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service

public class MyWardrobeService {

    private final MyWardrobeRepo repo;
    @Autowired
     public MyWardrobeService(MyWardrobeRepo repo) {
        this.repo = repo;
    }

    public List<MyWardrobeModel> getAllProducts () {
        return repo.findAll();
    }

    public MyWardrobeModel addProduct(MyWardrobeModel newProduct) {
        return repo.save(newProduct);
    }
}
