import React from 'react'
import Profile from '../imgs/D4C3702.jpg'
import Camera from '../imgs/photos.jpg'
import Graphics from '../imgs/Graphics.jpg'
import Web from '../imgs/web-devel.jpg'

export default function About() {
    return (
        <div className='container'>
        <div className="row" style={{ "padding" : "15px"}}>
           
                <div className='card col-12 col-md-4 col-12'>
                    <div className="card-body">
                        <img src={Profile} alt="Jenn" style={ { "width":"100%"} }></img>
                    </div>
                </div>
                <div className='card col-12 col-md-8 '>
                    <div className="card-body">
                        <h1>Hello.</h1>
                        <p>JPCW is a one stop shop for your digital development needs. Working with the digital arts for over 10 years, growing and adapting with the technological changes but always looking towards the horizon and thinking out side the box. </p>
                        
                    </div>
                </div> 
                <div><h3 style={{ "text-align": "center", "padding":" 10px 0 10px "}}>Main Services Offered:</h3></div>          
        <div className="row" style={{ "padding" : "15px"}}>
            
                <div className="card col-md-4">
                <img src={Camera} alt="Photography-Logo" style={ { "width":"100%"} }></img>
                 <div className="container">
                    <h2>Photography</h2>              
                    <p>Digital and Film Photography, Photo Editing, and Wedding, Portrait, Family, Baby, Realestate Photography as well as Videography</p>              
                </div>
                </div>
            
            
            <div className="card col-md-4">
            <img src={Web} alt="Web-development-Logo" style={ { "width":"100%"} }></img>
            <div className="container">
                <h2>Web Development</h2>
                <p>Recently Graduated from the University of Arizona's Full Stack Web Development Code Bootcamp and egar to hit the ground running with your next web application</p>
            </div>
            </div>
        
      
        
          <div className="card col-md-4 ">
          <img src={Graphics} alt="Graphic-Design-Logo" style={ { "width":"100%"} }></img>
            <div className="container">
              <h2>Graphic Design</h2>              
              <p>Do you need a unique logo for your business? Maybe a special vector file to help you stand out from the crowd? Well look no further! Just contact me about your graphic art needs and we will get the ball rolling on your next idea</p>                            
            </div>
          </div>
        
      
    </div>
    </div>
    </div>
   
    );
}