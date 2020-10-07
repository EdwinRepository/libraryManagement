package com.demo.libraryManagement.daoImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.demo.libraryManagement.dao.AuthorDao;
import com.demo.libraryManagement.model.Author;
import com.demo.libraryManagement.repository.AuthorRepository;

@Repository
public class AuthorDaoImpl implements AuthorDao {
	@Autowired
	private AuthorRepository authorRepository;

	@Override
	public Author createOrUpdateAuthor(Author author) {
		// TODO Auto-generated method stub
		return authorRepository.save(author);
	}

	@Override
	public Optional<Author> getAuthorById(Long authorId) {
		// TODO Auto-generated method stub
		return authorRepository.findById(authorId);
	}

	@Override
	public void deleteAuthor(Author author) {
		// TODO Auto-generated method stub
		authorRepository.delete(author);
	}

	@Override
	public List<Author> getAllAuthor() {
		// TODO Auto-generated method stub
		return authorRepository.findAll();
	}

}
