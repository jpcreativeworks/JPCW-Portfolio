import React from 'react'
import Cnt from '../imgs/contact.jpg'

export default function Contact() {
    return (
        <div className="card mb-3" style={{"padding": "20px"}}>
            <div className="row g-0">
                <div className="col-md-4" style={{"max-width": "100%"}}>
                    <img src={Cnt} className="img-fluid rounded-start" alt="Vector of a resume with purple background"></img>
                </div>                
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Contact Info</h5>
                        <p className="card-text">Please contact me at my info below.</p>
                        <div>
                            <ul class="list-group list-group-flush" >
                                <li class="list-group-item">Phone: 520-975-9373</li>
                                <li class="list-group-item">Email: jp.graphics.011@gmail.com</li>
                                <li class="list-group-item">GitHub: jpcreativeworks</li>
                            </ul>
                        </div>
                 </div>
                 
            </div>
        </div>
    </div>
    );
}