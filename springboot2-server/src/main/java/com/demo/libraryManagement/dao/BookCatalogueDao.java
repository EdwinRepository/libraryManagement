package com.demo.libraryManagement.dao;

import java.util.List;
import java.util.Optional;

import com.demo.libraryManagement.model.Book;

public interface BookCatalogueDao {

	public Book createOrUpdateBook(Book book);

	public Optional<Book> getBookById(Long bookId);

	public void deleteBook(Book user);

	public List<Book> getAllBooks();

}
