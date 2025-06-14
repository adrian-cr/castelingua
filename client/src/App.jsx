import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import About from "./pages/About";
import Contact from './pages/Contact';
import { AppProvider } from './hooks/AppContext';


function App() {
  return (
    <AppProvider>
        <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/búsqueda/:word" element={<Search/>}/>
          <Route path="/nosotros" element={<About/>}/>
          <Route path="/contacto" element={<Contact/>}/>
        </Routes>
      </div>
    </AppProvider>

  );
}

export default App;
