import React from 'react'
import { Link } from 'react-router-dom';
import Workp from '../imgs/resume.jpg'
import ResumeLink from '../imgs/Bencriscutto-Resume-2022.pdf'



export default function Resume() {
    return (
        <div className="card mb-3" style={{"max-width": "100%", "padding": "20px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={Workp} className="img-fluid rounded-start" alt="Vector of a resume with purple background"></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Resume</h5>
                        <p className="card-text">Please click the link and then refresh your page to view my resume: </p>
                        <Link to={ResumeLink}>Click</Link>
                 </div>
            </div>
        </div>
    </div>

    );
}