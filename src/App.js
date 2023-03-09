import Navbar from './components/navbar/navbar';
import Heading from './components/body/header/heading';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Content from './components/body/content/content';
import Contact from './components/navbar/Login/contact';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <>
        <Navbar />
     <Heading />
     <Content />
     <Footer />
        </>} />
        <Route path="login" element={<Contact />} />
      </Routes>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
