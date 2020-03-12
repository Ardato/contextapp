import React from 'react';
import { BookContextProvider } from './contexts/BookContext';
import { Navbar } from './componnents/Navbar';
import { BookList } from './componnents/BookList';
import NewBookForm from './componnents/BookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <NewBookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
