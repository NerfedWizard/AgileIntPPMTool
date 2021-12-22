package com.loel.exceptions;

import java.util.Random;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class DuplicateUsernameException extends RuntimeException {
	static Random rand = new Random();
	private static final long serialVersionUID = rand.nextLong();// or some long

	public DuplicateUsernameException(String message) {
		super(message);
	}
}
