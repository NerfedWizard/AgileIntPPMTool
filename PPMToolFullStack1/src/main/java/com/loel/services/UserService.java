package com.loel.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loel.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

}