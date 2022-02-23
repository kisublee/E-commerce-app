import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Show from "./pages/Show";
import Create from './pages/Create';

export default function App() {
  return (
    
    <BrowserRouter>
     <React.Fragment>
      <CssBaseline />
    <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Show />} />
          <Route path="/post" element={<Create />} />
        </Routes>
      </main>
      </React.Fragment>
    </BrowserRouter>
  );
}
