import React from 'react';
import { LibraryProvider } from './LibraryContext';
import BookList from './components/BookList';
import AuthorList from './components/AuthorList';
import './App.css';

function App() {
    return (
        <LibraryProvider>
            <div className="App">
                <h1>Library Management Dashboard</h1>
                <BookList />
                <AuthorList />
            </div>
        </LibraryProvider>
    );
}

export default App;

