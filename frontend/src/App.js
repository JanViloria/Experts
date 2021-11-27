import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar';

import Home from './screens/Home';
import Landing from './screens/Landing';
import NotFound from './screens/NotFound';
import Profile from './screens/Profile';
import Register from './screens/Register';
import SearchResults from './screens/SearchResults';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/searchresults" element={<SearchResults/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
