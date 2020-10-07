package com.demo.libraryManagement.daoImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.demo.libraryManagement.dao.PublisherDao;
import com.demo.libraryManagement.model.Publisher;
import com.demo.libraryManagement.repository.PublisherRepository;
@Repository
public class PublisherDaoImpl implements PublisherDao{
	@Autowired 
	private PublisherRepository repo;
	@Override
	public Publisher createOrUpdatePublisher(Publisher publisher) {
		// TODO Auto-generated method stub
		return repo.save(publisher);
	}

	@Override
	public Optional<Publisher> getPublisherById(Long publisherId) {
		// TODO Auto-generated method stub
		return repo.findById(publisherId);
	}

	@Override
	public void deleteAuthor(Publisher publisher) {
		// TODO Auto-generated method stub
		repo.delete(publisher);
	}

	@Override
	public List<Publisher> getAllPublisher() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

}
