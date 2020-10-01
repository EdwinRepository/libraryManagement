package com.demo.libraryManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
