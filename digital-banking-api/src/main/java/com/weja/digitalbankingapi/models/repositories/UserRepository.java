package com.weja.digitalbankingapi.models.repositories;

import org.springframework.data.repository.CrudRepository;
import com.weja.digitalbankingapi.models.Client;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import java.util.Optional;

@RepositoryRestResource
public interface UserRepository extends CrudRepository<Client, Integer> {

    Optional<Client> findByUserName(String userName);
}
