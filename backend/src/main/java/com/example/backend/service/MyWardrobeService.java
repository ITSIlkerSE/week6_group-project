package com.example.backend.service;

import com.example.backend.model.MyWardrobeModel;
import com.example.backend.repo.MyWardrobeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service

public class MyWardrobeService {

    private final MyWardrobeRepo repo;
    private final IdService idService;

    @Autowired
    public MyWardrobeService(MyWardrobeRepo repo, IdService idService) {
        this.repo = repo;
        this.idService = idService;
    }

    public List<MyWardrobeModel> getAllProducts() {
        return repo.findAll();
    }

    public MyWardrobeModel addProduct(MyWardrobeModel product) {
        product.setId(idService.generateId());
        return repo.save(product);
    }

    public void deleteProduct(String id) {
        repo.deleteById(id);
    }

    public Optional<MyWardrobeModel> getProductById(String id) {
        if (!repo.existsById(id)){
            throw new NoSuchElementException("There is no product with id : " + id);
        }

        return repo.findById(id);

    }

    public MyWardrobeModel updateProduct(String id, MyWardrobeModel product) {
        repo.save(product);
        return product;
    }
}
