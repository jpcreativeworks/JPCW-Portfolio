import React from 'react'
import Spc from '../imgs/Shady-pines-cinima-scnshot.png'
import Iven from '../imgs/datababes-iventory.herokuapp.com.png'
import Pwdg from '../imgs/PW-Generator.png'
import Ubs from '../imgs/the-ultimate-book-search.herokuapp.com.png'
import Jate from '../imgs/text-editor-app.png'
import Wfu from '../imgs/weather4u.png'
import Annedel from '../imgs/Annedel-CD-CASE.gif'
import Appcard from '../imgs/APPCard-Project.gif'
import Marry from '../imgs/engagment-photos.png'
import Cafep from '../imgs/Cafe-poster.png'
import Fueled from '../imgs/fuel-image-edit.jpg'
import Master from '../imgs/masterpiece-collage.jpg'
import Reader from '../imgs/materpiece-collage-the-reader.jpg'
import Vamp from '../imgs/Vamp-Posters.png'
import FuelT from '../imgs/Fuel.png'
import Jpcw from '../imgs/jpcw-old-html-site.png'



export default function Project() {
    return (
        <div className='container'>
            <div className='row g-4'>         
            <div className="card col-12 col-md-4" style={{"max-width": "25rem", "margin-right": "2rem"}}>                
                <div className="card-body">
                    <h5 className="card-title">Shady Pines Cinema</h5>
                    <p className="card-text">This is a movie search inspired by 'The Golden Girls'. Our group wanted anyone in their older years to be able look up a movie and save it to their "favorites" to watch later. Open in Chrome for optimal use. <a href='https://jpcreativeworks.github.io/the-Golden-Group-Project/'>Click Here</a> </p>
                    <p className="card-text"><small className="text-muted">Golden Group Collaborators: Jenn Bencriscutto, Lawson Vanderpool, Brant Martin and Samantha Lord</small></p>
                </div>
                <img src={Spc} className="card-img-bottom" alt="card-img-btm"></img>
            </div>
            <div className="card col-12 col-md-4" style={{"max-width": "25rem"}}> 
                <img src={Iven} className="card-img-top" alt="card-img-top"></img>               
                <div className="card-body">
                    <h5 className="card-title">iVentory</h5>
                    <p className="card-text">This app is for accountants to access prop houses in their area to request items for movies. Our client Apple Cinema asked for an updated website to speed up their workflow and prevent double spending on props for movies. Open in Chrome for optimal use. <a href='https://datababes-iventory.herokuapp.com/'>Click Here</a> </p>
                    <p className="card-text"><small className="text-muted">Datababes Collaborators: Jenn Bencriscutto, Samantha Lord and Britinie Estime</small></p>
                </div>
                
            </div>
            <div className="card col-12 col-md-4" style={{"max-width": "25rem", "margin-left": "2rem"}}> 
                               
                <div className="card-body">
                    <h5 className="card-title">Password Generator</h5>
                    <p className="card-text">This is a password generator to make secure passwords. In today's day and age, you can always use a secure password generator! Open in Chrome for optimal use. <a href='https://jpcreativeworks.github.io/Jenn-Password-Generator/'>Click Here</a> </p>
                    <p className="card-text"><small className="text-muted">Contributors: UofA and Trilogy Learning</small></p>
                </div>
                <img src={Pwdg} className="card-img-bottom" alt="card-img-btm"></img>
            </div>
            <div className="card col-12 col-md-4" style={{"max-width": "25rem", "margin-right": "2rem"}}> 
            <img src={Ubs} className="card-img-top" alt="card-img-top"></img>               
                <div className="card-body">
                    <h5 className="card-title">The Ultimate Book Search</h5>
                    <p className="card-text">This is an amazing book search, you can make your own account, search for books, and save your favorites! Open in Chrome for optimal use. <a href='https://the-ultimate-book-search.herokuapp.com/'>Click Here</a> </p>
                    <p className="card-text"><small className="text-muted">Contributors: UofA and Trilogy Learning</small></p>
                </div>
                
            </div>
            <div className="card col-12 col-md-4" style={{"max-width": "25rem"}}> 
                        
                <div className="card-body">
                    <h5 className="card-title">Text Editor App</h5>
                    <p className="card-text">This is an amazing text editor app that you can install and have it running on your desktop whenever you need it! Open it in chrome for optimal use. <a href='https://text-editor-pwd.herokuapp.com/'>Click Here</a> </p>
                    <p className="card-text"><small className="text-muted">Contributors: UofA and Trilogy Learning</small></p>
                </div>
                <img src={Jate} className="card-img-bottom" alt="card-img-btm"></img>    
            </div>
            <div className="card col-12 col-md-4" style={{"max-width": "25rem", "margin-left": "2rem"}}> 
            <img src={Wfu} className="card-img-top" alt="card-img-top"></img>               
                <div className="card-body">
                    <h5 className="card-title">Weather4U</h5>
                    <p className="card-text">This weather application was my first time working with an API and Bootstrap. Had a lot of fun with this project. <a href='https://jpcreativeworks.github.io/Jenn-Weather4U/'>Click Here</a> to get the weather!</p>
                    <p className="card-text"><small className="text-muted">Contributors: UofA and Trilogy Learning</small></p>
                </div>
                
            </div>
            <div className="card col-12 col-md-4" style={{"max-width": "25rem", "margin-right": "2rem"}}> 
                        
                <div className="card-body">
                    <h5 className="card-title">Annedel CD Case</h5>
                    <p className="card-text">I had the opportunity to work with Annedel to make them a three disc cd bundle case. This was a great project to collab and have full artistic freedom with.</p>
                    <p className="card-text"><small className="text-muted">Contributors: Annedel</small></p>
                </div>
                <img src={Annedel} className="card-img-bottom" alt="card-img-btm"></img>    
            </div>
            <div className="card col-12 col-md-4" style={{"max-width": "25rem"}}> 
            <img src={Appcard} className="card-img-top" alt="card-img-top"></img>               
                <div className="card-body">
                    <h5 className="card-title">AppCard</h5>
                    <p className="card-text">While I was interning for Yellow Brick Creative Studio I was able to work with a local cafe to impliment their AppCard Campaign</p>
                    <p className="card-text"><small className="text-muted">Contributors: Yellow Brick Creative Studio, Northwest Cafe, Chronicle Cafe</small></p>
                </div>
                
            </div>
            <div className="card col-12 col-md-4" style={{"max-width": "25rem", "margin-left": "2rem"}}> 
                        
                <div className="card-body">
                    <h5 className="card-title">Engagement Photos</h5>
                    <p className="card-text">While living in Saint Louis I was able to photograph this amazing session to capture the love. <a href='../img/engagement-photos.png'>Click Here</a> </p>
                    <p className="card-text"><small className="text-muted">Contributors: Sherise Kral and her Husband</small></p>
                </div>
                <img src={Marry} className="card-img-bottom" alt="card-img-btm"></img>    
            </div>
            <div className="card col-12 col-md-4" style={{"max-width": "25rem", "margin-right": "2rem"}}> 
                        
                <div className="card-body">
                    <h5 className="card-title">FUEL Photoshop</h5>
                    <p className="card-text">I had the opportunity to work a lot with FUEL, an amazing fitness company in Saint Louis. Here I edited an image for their website.</p>
                    <p className="card-text"><small className="text-muted">Contributors: FUEL, Yellow Brick Creative Studio</small></p>
                </div>
                <img src={Fueled} className="card-img-bottom" alt="card-img-btm"></img>    
            </div>
            <div className="card col-12 col-md-4" style={{"max-width": "25rem"}}> 
            <img src={Cafep} className="card-img-top" alt="card-img-top"></img>               
            <div className="card-body">
                    <h5 className="card-title">Northwest Cafe Food Advertisment</h5>
                    <p className="card-text">While interning with YBCS I was able to work with Northwest Cafe to photograph their food and create this poster that was hung in the window of their store. <a href='../img/Cafe-Poster.png'>Click Here</a> </p>
                    <p className="card-text"><small className="text-muted">Contributors: Yellow Brick Creative Studio, Northwest Cafe</small></p>
                </div>
            </div>
            <div className="card col-12 col-md-4" style={{"max-width": "25rem", "margin-left": "2rem"}}> 
                        
                <div className="card-body">
                    <h5 className="card-title">Photo Edit Study</h5>
                    <p className="card-text">While at McDaniel College, I was able to put together these really cool images of myself painted in masterpieces.</p>
                    <p className="card-text"><small className="text-muted">Contributors: Photoshop</small></p>
                </div>
                <img src={Master} className="card-img-bottom" alt="card-img-btm" ></img>    
                <img src={Reader} className="card-img-bottom" alt="card-img-btm" ></img>    
            </div>
            <div className="card col-12 col-md-4" style={{"max-width": "25rem", "margin-right": "2rem"}}> 
                        
                <div className="card-body">
                    <h5 className="card-title">VAMP Tour Posters</h5>
                    <p className="card-text">I was lucky enough to have the opportunity to work with VAMP, a collective of performing Drag Queens and Ghouls based in Tucson, AZ. I created these posters for their Spooky B*tchs Tour. Check out their instagram <a href='https://www.instagram.com/revamped.drag/'>here</a>.</p>
                    <p className="card-text"><small className="text-muted">Contributors: VAMP</small></p>
                </div>
                <img src={Vamp} className="card-img-bottom" alt="card-img-btm"></img>    
            </div>
            <div className="card col-12 col-md-4" style={{"max-width": "25rem"}}> 
            <img src={FuelT} className="card-img-top" alt="card-img-top"></img>               
            <div className="card-body">
                    <h5 className="card-title">FUEL T-Shirts</h5>
                    <p className="card-text">While interning with YBCS I was able to work with FUEL Fitness and designed this t-shirt logo and catalog for ordering. </p>
                    <p className="card-text"><small className="text-muted">Contributors: Yellow Brick Creative Studio, FUEL</small></p>
                </div>
            </div>
            <div className="card col-12 col-md-4" style={{"max-width": "25rem", "margin-left": "2rem"}}> 
                        
                <div className="card-body">
                    <h5 className="card-title">JPCW Previous Website</h5>
                    <p className="card-text">Finishing up the bootcamp I think it is important to see where you have come from. Check out my first portfolio website <a href='https://jpcreativeworks.github.io/Jenn-Portfolio/'>here</a> and see how far I have come as a web developer and designer!</p>
                    <p className="card-text"><small className="text-muted">Contributors: Photoshop</small></p>
                </div>
                <img src={Jpcw} className="card-img-bottom" alt="card-img-btm" ></img>    
            </div>
            </div>   
        </div>
    );
}