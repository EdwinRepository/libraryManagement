package com.demo.libraryManagement.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.libraryManagement.dao.AuthorDao;
import com.demo.libraryManagement.model.Author;
import com.demo.libraryManagement.service.AuthorService;
@Service
public class AuthorServiceImpl implements AuthorService{
@Autowired 
private AuthorDao authorDao;
	@Override
	public Author createOrUpdateAuthor(Author author) {
		// TODO Auto-generated method stub
		return authorDao.createOrUpdateAuthor(author);
	}

	@Override
	public Optional<Author> getAuthorById(Long authorId) {
		// TODO Auto-generated method stub
		return authorDao.getAuthorById(authorId);
	}

	@Override
	public void deleteAuthor(Author author) {
		// TODO Auto-generated method stub
		authorDao.deleteAuthor(author);
	}

	@Override
	public List<Author> getAllAuthor() {
		// TODO Auto-generated method stub
		return authorDao.getAllAuthor();
	}

}
