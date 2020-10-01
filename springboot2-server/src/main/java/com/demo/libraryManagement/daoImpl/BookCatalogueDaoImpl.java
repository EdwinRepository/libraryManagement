package com.demo.libraryManagement.daoImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.demo.libraryManagement.dao.BookCatalogueDao;
import com.demo.libraryManagement.model.Book;
import com.demo.libraryManagement.repository.AuthorRepository;
import com.demo.libraryManagement.repository.BookCatalogueRepository;
@Repository
public class BookCatalogueDaoImpl implements BookCatalogueDao{
	@Autowired
	private BookCatalogueRepository bookCatalogueRepository;
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
		return bookCatalogueRepository.findAll();
	}

}
