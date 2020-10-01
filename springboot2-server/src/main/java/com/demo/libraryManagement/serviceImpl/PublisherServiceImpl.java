package com.demo.libraryManagement.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.libraryManagement.dao.AuthorDao;
import com.demo.libraryManagement.dao.PublisherDao;
import com.demo.libraryManagement.model.Publisher;
import com.demo.libraryManagement.service.PublisherService;
@Service
public class PublisherServiceImpl implements PublisherService{
	@Autowired 
	private PublisherDao publisherDao;
	@Override
	public Publisher createOrUpdatePublisher(Publisher publisher) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Publisher> getPublisherById(Long publisherId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteAuthor(Publisher publisher) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Publisher> getAllPublisher() {
		// TODO Auto-generated method stub
		return publisherDao.getAllPublisher();
	}

}
