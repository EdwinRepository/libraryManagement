package com.demo.libraryManagement.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.libraryManagement.dao.BookCatalogueDao;
import com.demo.libraryManagement.model.Book;
import com.demo.libraryManagement.service.BookCatalogueService;
@Service
public class BookCatalogueImpl implements BookCatalogueService{
	@Autowired
	private BookCatalogueDao bookCatalogueDao;
	@Override
	public Book createOrUpdateBook(Book book) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Book> getBookById(Long bookId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteBook(Book user) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Book> getAllBooks() {
		// TODO Auto-generated method stub
		return bookCatalogueDao.getAllBooks();
	}

}
