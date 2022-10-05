package com.example.backend.service;

import com.example.backend.model.MyWardrobeModel;
import com.example.backend.repo.MyWardrobeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

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
        return repo.findById(id);

    }

    public MyWardrobeModel updateProduct(MyWardrobeModel product) {
        if (!repo.existsById(product.getId())){
            throw new NoSuchElementException("There is no product with id : ");
        }
     return repo.save(product);
    }
}
