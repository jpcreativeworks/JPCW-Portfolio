import React from 'react'
import Contact from './Contact'
import About from './About'
import Portfolio from './Portfolio'
import Resume from './Resume'
import BrowserRouter from 'react'
import { Routes } from 'react-router-dom';


export default function Main() {
    return (
        <main>
            <div>Main stuff</div>
            <div>
                <BrowserRouter>
                    <Routes>
                    <Contact />
                    <About />
                    <Portfolio />
                    <Resume />
                    </Routes>
                </BrowserRouter>
                
            </div>
        </main>

    );
}