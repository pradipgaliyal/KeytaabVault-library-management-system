package com.keytaabvault.entity;

import javax.persistence.*;

import lombok.Data;

@Data 
@Entity
@Table(name="book")
public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
	@Column(name="title")
	String title;
	
	@Column(name="author")
	String author;
	@Column(name="description")
	String description;
	@Column(name = "copies")
	String copies;
	@Column(name ="copies_available")
	String copiesAvailable;
	@Column(name="img")
	String img;
}
