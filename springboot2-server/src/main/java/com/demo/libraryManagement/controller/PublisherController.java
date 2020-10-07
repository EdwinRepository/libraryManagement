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
import com.demo.libraryManagement.model.Publisher;
import com.demo.libraryManagement.service.PublisherService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class PublisherController {
	@Autowired
	private PublisherService publisherService;

	@GetMapping("/publishers")
	public List<Publisher> getAllPublisher() {
		return publisherService.getAllPublisher();
	}
	
	@PostMapping("/publishers")
	public Publisher savePublisherDetails(@Valid @RequestBody Publisher publisher) {
		return publisherService.createOrUpdatePublisher(publisher);
	}

	@GetMapping("/publishers/{id}")
	public ResponseEntity<Publisher> getPublisherById(@PathVariable(value = "id") Long publisherId)
			throws ResourceNotFoundException {
		Publisher publisher = publisherService.getPublisherById(publisherId)
				.orElseThrow(() -> new ResourceNotFoundException("Publisher not found for this id :: " + publisherId));
		return ResponseEntity.ok().body(publisher);
	}

	@PutMapping("/publishers/{id}")
	public ResponseEntity<Publisher> updatePublisher(@PathVariable(value = "id") Long publisherId,
			@Valid @RequestBody Publisher publisherDetails) throws ResourceNotFoundException {
		Publisher publisher = publisherService.getPublisherById(publisherId)
				.orElseThrow(() -> new ResourceNotFoundException("Publisher not found for this id :: " + publisherId));

		publisher.setName(publisherDetails.getName());
		publisher.setAddress(publisherDetails.getAddress());
		final Publisher updatedPublisher = publisherService.createOrUpdatePublisher(publisher);
		return ResponseEntity.ok(updatedPublisher);
	}

	@DeleteMapping("/publishers/{id}")
	public Map<String, Boolean> deletePublisher(@PathVariable(value = "id") Long publisherId)
			throws ResourceNotFoundException {
		Publisher publisher = publisherService.getPublisherById(publisherId)
				.orElseThrow(() -> new ResourceNotFoundException("Publisher not found for this id :: " + publisherId));

		publisherService.deletePublisher(publisher);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
