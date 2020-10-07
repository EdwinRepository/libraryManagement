package com.demo.libraryManagement.service;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import com.demo.libraryManagement.model.Author;
import com.demo.libraryManagement.model.User;

public interface AuthorService {
	public Author createOrUpdateAuthor(@Valid Author author);

	public Optional<Author> getAuthorById(Long authorId);

	public void deleteAuthor(Author author);

	public List<Author> getAllAuthor();
}
