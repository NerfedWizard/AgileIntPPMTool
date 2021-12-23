package com.loel.repositories;

import org.springframework.data.repository.CrudRepository;
import java.util.Optional;
import com.loel.domain.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

	User findByUsername(String username);

	User getById(Long id);

}
