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
import com.demo.libraryManagement.service.AuthorService;

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

	@PostMapping("/authors")
	public Author createAuthorDetails(@Valid @RequestBody Author author) {
		return authorService.createOrUpdateAuthor(author);
	}

	@GetMapping("/authors/{id}")
	public ResponseEntity<Author> getAuthorById(@PathVariable(value = "id") Long authorId)
			throws ResourceNotFoundException {
		Author author = authorService.getAuthorById(authorId)
				.orElseThrow(() -> new ResourceNotFoundException("AUTHOR not found for this id :: " + authorId));
		return ResponseEntity.ok().body(author);
	}

	@PutMapping("/authors/{id}")
	public ResponseEntity<Author> updateAuthor(@PathVariable(value = "id") Long authorId,
			@Valid @RequestBody Author authorDetails) throws ResourceNotFoundException {
		Author author = authorService.getAuthorById(authorId)
				.orElseThrow(() -> new ResourceNotFoundException("AUTHOR not found for this id :: " + authorId));

		author.setName(authorDetails.getName());
		final Author updatedAuthor = authorService.createOrUpdateAuthor(author);
		return ResponseEntity.ok(updatedAuthor);
	}

	@DeleteMapping("/authors/{id}")
	public Map<String, Boolean> deleteAuthor(@PathVariable(value = "id") Long authorId)
			throws ResourceNotFoundException {
		Author author = authorService.getAuthorById(authorId)
				.orElseThrow(() -> new ResourceNotFoundException("AUTHOR not found for this id :: " + authorId));

		authorService.deleteAuthor(author);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
