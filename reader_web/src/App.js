import logo from './logo.svg';
import './App.css';
import Home from './Home';
import BookPreview from './BookPreview';
import PdfPreview from './PdfPreview'
import { Route, BrowserRouter, Routes, Navigate} from 'react-router-dom';
import AboutUs from './AboutUs';
import Contact from './Contact';
import BookSearching from './BookSearching';

function App() {
  return (
      <BrowserRouter>
          <Routes>
                <Route exact path="/" element={<Home />} />
                <Route name="book-preview" path="/book-preview/:id" element={<BookPreview />} />
                <Route name="file-preview" path="/file-preview/:id" element={<PdfPreview />} />
                <Route name="about-us" path="/about-us" element={<AboutUs />} />
                <Route name="contact" path="/contact" element={<Contact />} />
                <Route name="book-searching" path="/book-searching/:sorted/:name" element={<BookSearching />} />
                {/* <Route path='*' element={<Navigate to='/' />} /> */}
          </Routes>
          
      </BrowserRouter>
  );
}

export default App;
