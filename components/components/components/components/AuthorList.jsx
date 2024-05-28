import React, { useContext, useState } from 'react';
import { LibraryContext } from '../LibraryContext';
import AuthorForm from './AuthorForm';

const AuthorList = () => {
    const { authors, addAuthor, updateAuthor, deleteAuthor } = useContext(LibraryContext);
    const [editingAuthor, setEditingAuthor] = useState(null);

    const handleAddAuthor = (author) => {
        addAuthor(author);
    };

    const handleUpdateAuthor = (author) => {
        updateAuthor(author.id, author);
        setEditingAuthor(null);
    };

    const handleEditClick = (author) => {
        setEditingAuthor(author);
    };

    const handleDeleteClick = (id) => {
        deleteAuthor(id);
    };

    return (
        <div>
            <h2>Authors</h2>
            <AuthorForm onSubmit={editingAuthor ? handleUpdateAuthor : handleAddAuthor} author={editingAuthor} />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Birth Date</th>
                        <th>Biography</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map(author => (
                        <tr key={author.id}>
                            <td>{author.name}</td>
                            <td>{author.birthDate}</td>
                            <td>{author.biography}</td>
                            <td>
                                <button onClick={() => handleEditClick(author)}>Edit</button>
                                <button onClick={()
