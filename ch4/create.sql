CREATE TABLE book(
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(255),
	author_id INT,
	publishing_year VARCHAR(255),
	genre VARCHAR(255),
	created_at DATETIME,
	updated_at DATETIME,
	PRIMARY KEY (id)
);
