import { Routes, Route} from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from './app/assets/img/logo.png';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import './App.css';

function App() {
    return (
        <div className="App">
          <Navbar dark color='primary' sticky='top' expand='md'>
              <Container>
                  <NavbarBrand href='/'>
                      <img src={NucampLogo} alt='nucamp logo'/>
                  </NavbarBrand>
              </Container>
          </Navbar>
          <Routes>
                <Route path='/'  element={<HomePage/>} />
                <Route path='contact' element={<ContactPage/>}/>
                <Route path='directory' element={<CampsitesDirectoryPage/>}/>
          </Routes>
          <Footer/>
        </div>
    );
}

export default App;
