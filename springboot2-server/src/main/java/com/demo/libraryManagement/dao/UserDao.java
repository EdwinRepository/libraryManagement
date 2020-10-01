package com.demo.libraryManagement.dao;

import java.util.List;
import java.util.Optional;

import com.demo.libraryManagement.model.User;

public interface UserDao {

	public User createOrUpdateUser(User user);

	public Optional<User> getUserById(Long userId);

	public void deleteUser(User user);

	public List<User> getAllUsers();

}
