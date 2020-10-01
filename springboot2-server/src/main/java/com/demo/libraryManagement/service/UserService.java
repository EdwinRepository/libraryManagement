package com.demo.libraryManagement.service;

import java.util.List;
import java.util.Optional;

import com.demo.libraryManagement.model.User;

public interface UserService {
	public User createOrUpdateUser(User user);

	public Optional<User> getUserById(Long userId);

	public void deleteUser(User user);

	public List<User> getAllUsers();
}
