package com.example.backend.repo;
import com.example.backend.model.MyWardrobeDTO;
import com.example.backend.model.MyWardrobeModel;
import org.springframework.boot.autoconfigure.data.mongo.MongoRepositoriesAutoConfiguration;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository


public interface MyWardrobeRepo extends MongoRepository<MyWardrobeModel, String> {



}
