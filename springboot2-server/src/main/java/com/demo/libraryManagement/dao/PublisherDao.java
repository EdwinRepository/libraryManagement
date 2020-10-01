package com.demo.libraryManagement.dao;

import java.util.List;
import java.util.Optional;

import com.demo.libraryManagement.model.Publisher;

public interface PublisherDao {

	public Publisher createOrUpdatePublisher(Publisher publisher);

	public Optional<Publisher> getPublisherById(Long publisherId);

	public void deleteAuthor(Publisher publisher);

	public List<Publisher> getAllPublisher();

}
