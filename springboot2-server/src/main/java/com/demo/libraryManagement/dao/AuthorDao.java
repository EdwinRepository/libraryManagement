package com.demo.libraryManagement.dao;

import java.util.List;
import java.util.Optional;

import com.demo.libraryManagement.model.Author;

public interface AuthorDao {

	public Author createOrUpdateAuthor(Author author);

	public Optional<Author> getAuthorById(Long authorId);

	public void deleteAuthor(Author author);

	public List<Author> getAllAuthor();

}
