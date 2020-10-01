package com.demo.libraryManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.libraryManagement.model.Author;
import com.demo.libraryManagement.model.User;
import com.demo.libraryManagement.service.AuthorService;
import com.demo.libraryManagement.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class AuthorController {
	@Autowired
	private AuthorService authorService;

	@GetMapping("/authors")
	public List<Author> getAllAuthor() {
		return authorService.getAllAuthor();
	}
}
