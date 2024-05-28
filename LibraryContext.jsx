import React, { createContext, useState } from 'react';

const LibraryContext = createContext();

const LibraryProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);

    const addBook = (book) => {
        setBooks([...books, book]);
    };

    const updateBook = (isbn, updatedBook) => {
        setBooks(books.map(book => book.isbn === isbn ? updatedBook : book));
    };

    const deleteBook = (isbn) => {
        setBooks(books.filter(book => book.isbn !== isbn));
    };

    const addAuthor = (author) => {
        setAuthors([...authors, author]);
    };

    const updateAuthor = (id, updatedAuthor) => {
        setAuthors(authors.map(author => author.id === id ? updatedAuthor : author));
    };

    const deleteAuthor = (id) => {
        setAuthors(authors.filter(author => author.id !== id));
    };

    return (
        <LibraryContext.Provider value={{ books, authors, addBook, updateBook, deleteBook, addAuthor, updateAuthor, deleteAuthor }}>
            {children}
        </LibraryContext.Provider>
    );
};

export { LibraryContext, LibraryProvider };
