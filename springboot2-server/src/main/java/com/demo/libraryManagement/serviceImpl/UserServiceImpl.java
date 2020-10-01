package com.demo.libraryManagement.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.libraryManagement.dao.UserDao;
import com.demo.libraryManagement.model.User;
import com.demo.libraryManagement.service.UserService;
@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserDao userDao;
	@Override
	public User createOrUpdateUser(User user) {
		// TODO Auto-generated method stub
		return userDao.createOrUpdateUser(user);
	}

	@Override
	public Optional<User> getUserById(Long userId) {
		// TODO Auto-generated method stub
		return userDao.getUserById(userId);
	}

	@Override
	public void deleteUser(User user) {
		// TODO Auto-generated method stub
		userDao.deleteUser(user);
	}

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return userDao.getAllUsers();
	}

}
