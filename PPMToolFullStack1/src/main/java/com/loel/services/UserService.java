package com.loel.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.loel.domain.User;
import com.loel.exceptions.DuplicateUsernameException;
import com.loel.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public User saveUser(User newUser) {

		try {
			newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
			newUser.setUsername(newUser.getUsername());

//			newUser.setConfirmPassword("");

			return userRepository.save(newUser);

		} catch (Exception e) {
			throw new DuplicateUsernameException("Username '" + newUser.getUsername() + "' is used sorry boss");
		}
	}

}