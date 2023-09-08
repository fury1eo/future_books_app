import './App.css';
import Header from './components/header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import BookDetails from './pages/bookDetails';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/books' element={<BooksPage/>}/>
        <Route path='/books/:bookId' element={<BookDetails/>}/>
        <Route path='*' element={<Navigate to='books' replace={true}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
