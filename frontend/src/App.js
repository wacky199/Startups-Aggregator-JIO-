import logo from './logo.svg';
import './App.css';
import Header from './Header'
import News from './News'
import News_des from './News_des';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/news" element={<News />} />
        <Route path="/news_des" element={<News_des />} />
        {/* <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
