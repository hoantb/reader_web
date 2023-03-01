import logo from './logo.svg';
import './App.css';
import Home from './Home';
import BookPreview from './BookPreview';
import PdfPreview from './PdfPreview'
import { Route, BrowserRouter, Routes, Navigate} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <Routes>
                <Route exact path="/" element={<Home />} />
                <Route name="book-preview" path="/book-preview/:id" element={<BookPreview />} />
                <Route name="file-preview" path="/file-preview/:id" element={<PdfPreview />} />
                {/* <Route path='*' element={<Navigate to='/' />} /> */}
          </Routes>
          
      </BrowserRouter>
  );
}

export default App;
