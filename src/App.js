import './jass.css';
import './App.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Project from './components/project/Project';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/react-portfolio' element={<Home/>}/>
        <Route path='/react-portfolio/projects' element={<Project/>}/>
        <Route path='/react-portfolio/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
