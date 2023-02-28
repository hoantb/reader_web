import logo from './logo.svg';
import './App.css';
import Home from './Home';
import BookPreview from './BookPreview';
import { Route, BrowserRouter, Routes, Navigate} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/book-preview" element={<BookPreview />} />
                <Route path='*' element={<Navigate to='/' />} />
          </Routes>
          
      </BrowserRouter>
  );
}

export default App;
