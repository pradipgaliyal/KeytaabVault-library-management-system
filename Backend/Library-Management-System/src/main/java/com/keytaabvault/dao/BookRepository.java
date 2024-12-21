package com.keytaabvault.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.keytaabvault.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
