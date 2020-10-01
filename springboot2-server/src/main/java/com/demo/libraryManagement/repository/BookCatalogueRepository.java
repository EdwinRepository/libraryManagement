package com.demo.libraryManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.demo.libraryManagement.model.Book;

public interface BookCatalogueRepository extends JpaRepository<Book, Long>, JpaSpecificationExecutor<Book>{

}
