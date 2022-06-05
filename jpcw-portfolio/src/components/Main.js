import React from 'react'
import Contact from './Contact'
import About from './About'
import Portfolio from './Portfolio'
import Resume from './Resume'
import BrowserRouter from 'react'

export default function Main() {
    return (
        <main>
            <div>Main stuff</div>
            <div>
                <BrowserRouter>
                    <Contact />
                    <About />
                    <Portfolio />
                    <Resume />
                </BrowserRouter>
                
            </div>
        </main>

    );
}