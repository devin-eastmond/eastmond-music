import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Browse from './pages/browse'
import Compositions from "./pages/compositions";
import About from "./pages/about";
import Contact from "./pages/contact";
import View from "./pages/view";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="browse" element={<Browse />} />
                    <Route path="compositions" element={<Compositions />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="view" element={<View />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
);
