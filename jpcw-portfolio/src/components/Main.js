import React from 'react'
import Contact from './Contact'
import About from './About'
import Portfolio from './Portfolio'
import Resume from './Resume'

export default function Main() {
    return (
        <main>
            <div>Main stuff</div>
            <div>
                <Contact />
                <About />
                <Portfolio />
                <Resume />
            </div>
        </main>

    );
}