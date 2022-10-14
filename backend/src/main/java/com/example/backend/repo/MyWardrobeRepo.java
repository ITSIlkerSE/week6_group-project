package com.example.backend.repo;

import com.example.backend.model.MyWardrobeModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository


public interface MyWardrobeRepo extends MongoRepository<MyWardrobeModel, String> {


}
