import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-light text-center text-white" id='footer'>
            {/* <!-- Grid container --> */}
            <div className="container p-4 pb-0">
             {/* <!-- Section: Social media --> */}
                <section className="mb-4">
                {/* <!-- Facebook --> */}
                <a
                    className="btn btn-primary btn-floating m-1"
                    style={{"background-color": "#3b5998"}}
                    href="https://www.facebook.com/jpcreativeworks/"
                    role="button">Facebook</a>

                {/* <!-- Google --> */}
                <a
                    className="btn btn-primary btn-floating m-1"
                    style={{"background-color": "#dd4b39"}}
                    href="https://www.google.com/search?sxsrf=ALiCzsb7jaY5l7rPr1IUyQ7afgn8DZiVuw:1654830603843&source=univ&tbm=isch&q=jpcreativeworks&fir=x0jJWcVFpZ5vyM…"
                    role="button">Google</a>

                {/* <!-- Instagram --> */}
                <a
                    className="btn btn-primary btn-floating m-1"
                    style={{"background-color": "#ac2bac"}}
                    href="https://www.instagram.com/jpcreativeworks/?hl=en"
                    role="button"
                    >Insta</a>

                    {/* <!-- Linkedin --> */}
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={ {"background-color": "#0082ca"} }
                        href="https://www.linkedin.com/in/jpgraphics011/"
                        role="button">Linkedin</a>
                    {/* <!-- Github --> */}
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={ {"background-color": "#333333"} }
                        href="https://github.com/jpcreativeworks"
                        role="button">GitHub</a>
                </section>
                {/* <!-- Section: Social media --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-3" style= { {"background-color" : "rgba(0, 0, 0, 0.2)"} }>
                © 2022 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">JPCW.com</a>
            </div>
            {/* <!-- Copyright --> */}
        </footer>
    );
}