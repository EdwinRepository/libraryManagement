package com.demo.libraryManagement.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.libraryManagement.exception.ResourceNotFoundException;
import com.demo.libraryManagement.model.Author;
import com.demo.libraryManagement.model.Book;
import com.demo.libraryManagement.service.BookCatalogueService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class BookCatalogueController {

	@Autowired
	private BookCatalogueService bookCatalogueService;

	@GetMapping("/books")
	public List<Book> getAllBook() {
		return bookCatalogueService.getAllBooks();
	}
	@PostMapping("/books")
	public Book saveBookDetails(@Valid @RequestBody Book book) {
		return bookCatalogueService.createOrUpdateBook(book);
	}

	@GetMapping("/books/{id}")
	public ResponseEntity<Book> getBookById(@PathVariable(value = "id") Long bookId)
			throws ResourceNotFoundException {
		Book book = bookCatalogueService.getBookById(bookId)
				.orElseThrow(() -> new ResourceNotFoundException("Book not found for this id :: " + bookId));
		return ResponseEntity.ok().body(book);
	}

	@PutMapping("/books/{id}")
	public ResponseEntity<Book> updateBook(@PathVariable(value = "id") Long bookId,
			@Valid @RequestBody Book bookDetails) throws ResourceNotFoundException {
		Book book = bookCatalogueService.getBookById(bookId)
				.orElseThrow(() -> new ResourceNotFoundException("Book not found for this id :: " + bookId));

		book.setAuthorName(bookDetails.getAuthorName());
		book.setBookPrice(bookDetails.getBookPrice());
		book.setTitle(book.getTitle());
		final Book updatedBook = bookCatalogueService.createOrUpdateBook(book);
		return ResponseEntity.ok(updatedBook);
	}

	@DeleteMapping("/books/{id}")
	public Map<String, Boolean> deleteBook(@PathVariable(value = "id") Long bookId)
			throws ResourceNotFoundException {
		Book book = bookCatalogueService.getBookById(bookId)
				.orElseThrow(() -> new ResourceNotFoundException("Book not found for this id :: " + bookId));

		bookCatalogueService.deleteBook(book);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
