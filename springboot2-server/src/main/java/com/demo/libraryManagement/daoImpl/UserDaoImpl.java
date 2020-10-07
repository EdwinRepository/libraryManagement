package com.demo.libraryManagement.daoImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.demo.libraryManagement.dao.UserDao;
import com.demo.libraryManagement.model.User;
import com.demo.libraryManagement.repository.UserRepository;

@Repository
public class UserDaoImpl implements UserDao {
	@Autowired
	private UserRepository userRepo;

	@Override
	public User createOrUpdateUser(User user) {
		// TODO Auto-generated method stub
		return userRepo.save(user);
	}

	@Override
	public Optional<User> getUserById(Long userId) {
		// TODO Auto-generated method stub
		return userRepo.findById(userId);
	}

	@Override
	public void deleteUser(User user) {
		// TODO Auto-generated method stub
		userRepo.delete(user);
	}

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return userRepo.findAll();
	}

}
