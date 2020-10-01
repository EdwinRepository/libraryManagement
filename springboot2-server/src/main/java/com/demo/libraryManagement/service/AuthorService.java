package com.demo.libraryManagement.service;

import java.util.List;
import java.util.Optional;

import com.demo.libraryManagement.model.Author;

public interface AuthorService {
	public Author createOrUpdateAuthor(Author author);

	public Optional<Author> getAuthorById(Long authorId);

	public void deleteAuthor(Author author);

	public List<Author> getAllAuthor();
}
