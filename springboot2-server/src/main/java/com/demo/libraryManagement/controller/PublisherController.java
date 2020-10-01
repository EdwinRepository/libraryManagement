package com.demo.libraryManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
