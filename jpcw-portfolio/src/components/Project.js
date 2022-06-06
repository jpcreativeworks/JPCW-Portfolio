import React from 'react'
import Spc from '../Shady-pines-cinima-scnshot.png'
import Iven from '../datababes-iventory.herokuapp.com.png'
import Pwdg from '../PW-Generator.png'
import Ubs from '../the-ultimate-book-search.herokuapp.com.png'
import Jate from '../text-editor-app.png'
import Wfu from '../weather4u.png'



export default function Project() {
    return (
        <div className='container'>
            <div className='row'>         
            <div className="card col-12 col-md-4">                
                <div className="card-body">
                    <h5 className="card-title">Shady Pines Cinema</h5>
                    <p className="card-text">This is a movie search inspired by the Golden Girls. Our group wanted anyone who is in their older years to look up a movie and save it to their favorites to watch later. Open in Chrome for optimal use. <a href='https://jpcreativeworks.github.io/the-Golden-Group-Project/'>Click Here</a> </p>
                    <p className="card-text"><small className="text-muted">Golden Group Collaborators: Jenn Bencriscutto, Lawson Vanderpool, Brant Martin and Samantha Lord</small></p>
                </div>
                <img src={Spc} className="card-img-bottom" alt="card-img-btm"></img>
            </div>
            <div className="card col-12 col-md-4"> 
                <img src={Iven} className="card-img-top" alt="card-img-top"></img>               
                <div className="card-body">
                    <h5 className="card-title">iVentory</h5>
                    <p className="card-text">This app is for accountants to access prop houses in their area to request items for movies, Our client Apple Cinema asked for an updated website to speed up their workflow and prevent double spending on Props for movies. Open in Chrome for optimal use. <a href='https://datababes-iventory.herokuapp.com/'>Click Here</a> </p>
                    <p className="card-text"><small className="text-muted">Datababes Collaborators: Jenn Bencriscutto, Samantha Lord and Britinie Estime</small></p>
                </div>
                
            </div>
            <div className="card col-12 col-md-4"> 
                               
                <div className="card-body">
                    <h5 className="card-title">Password Generator</h5>
                    <p className="card-text">This is a password generator to make secure passwords. In today's day and age you can always use a secure password generator! Open in Chrome for optimal use. <a href='https://jpcreativeworks.github.io/Jenn-Password-Generator/'>Click Here</a> </p>
                    <p className="card-text"><small className="text-muted">Contributors: UofA and Trilogy Learning</small></p>
                </div>
                <img src={Pwdg} className="card-img-bottom" alt="card-img-btm"></img>
            </div>
            <div className="card col-12 col-md-4"> 
            <img src={Ubs} className="card-img-top" alt="card-img-top"></img>               
                <div className="card-body">
                    <h5 className="card-title">The Ultimate Book Search</h5>
                    <p className="card-text">This is an amazing book search, you can make your own account and search for books and save your favorites! Open in Chrome for optimal use. <a href='https://the-ultimate-book-search.herokuapp.com/'>Click Here</a> </p>
                    <p className="card-text"><small className="text-muted">Contributors: UofA and Trilogy Learning</small></p>
                </div>
                
            </div>
            <div className="card col-12 col-md-4"> 
                        
                <div className="card-body">
                    <h5 className="card-title">Text Editor App</h5>
                    <p className="card-text">This is an amazing text editor app that you can install the app and have it running on your desktop whenever you need it! Open it in chrome for optimal use. <a href='https://text-editor-pwd.herokuapp.com/'>Click Here</a> </p>
                    <p className="card-text"><small className="text-muted">Contributors: UofA and Trilogy Learning</small></p>
                </div>
                <img src={Jate} className="card-img-bottom" alt="card-img-btm"></img>    
            </div>
            <div className="card col-12 col-md-4"> 
            <img src={Wfu} className="card-img-top" alt="card-img-top"></img>               
                <div className="card-body">
                    <h5 className="card-title">Weather4U</h5>
                    <p className="card-text">This weather application was my first time working with an API and bootstrap. Had a lot of fun with this project. <a href='https://jpcreativeworks.github.io/Jenn-Weather4U/'>Click Here</a> to get the weather!</p>
                    <p className="card-text"><small className="text-muted">Contributors: UofA and Trilogy Learning</small></p>
                </div>
                
            </div>
            </div>   
        </div>
    );
}