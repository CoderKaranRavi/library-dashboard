import React, { useContext, useState } from 'react';
import { LibraryContext } from '../LibraryContext';
import BookForm from './BookForm';

const BookList = () => {
    const { books, addBook, updateBook, deleteBook } = useContext(LibraryContext);
    const [editingBook, setEditingBook] = useState(null);

    const handleAddBook = (book) => {
        addBook(book);
    };

    const handleUpdateBook = (book) => {
        updateBook(book.isbn, book);
        setEditingBook(null);
    };

    const handleEditClick = (book) => {
        setEditingBook(book);
    };

    const handleDeleteClick = (isbn) => {
        deleteBook(isbn);
    };

    return (
        <div>
            <h2>Books</h2>
            <BookForm onSubmit={editingBook ? handleUpdateBook : handleAddBook} book={editingBook} />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN</th>
                        <th>Publication Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.isbn}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.isbn}</td>
                            <td>{book.publicationDate}</td>
                            <td>
                                <button onClick={() => handleEditClick(book)}>Edit</button>
                                <button onClick={() => handleDeleteClick(book.isbn)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookList;
