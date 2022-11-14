import  React from 'react'
import { Link } from 'react-router-dom';


function Footer(props) {
    return (
        <footer className="site-footer"><br/>
            <div className="container">
                <div className="row footer-content">
                    <div className="col-lg-4 mt-3">
                        <h2>TIME TAX </h2>
                        <p>Our goal is to provide the feeling of a personal tax consultant  alongside security,Confidence, and protection. We combine industry expertise</p>
                    </div>
                    <div className="col-lg-2 mt-3">
                        <h2>LINKS</h2>
                        <ul className="list-unstyled">
                        <li><Link to='/home' style={{color:"white"}}>Home</Link></li>
                        <li><Link to='/service' style={{color:"white"}}>Service</Link></li>
                        <li><Link to='/support' style={{color:"white"}}>Support</Link></li>
                        <li><Link to='/contact' style={{color:"white"}}>Contact</Link></li>
                        </ul>
                    </div> 
                    <div className="col-lg-3 mt-3">
                        <h2>CONTACT</h2>
                        <p>Derar Building 6th floor office no. xx, Sahlit Mehret, Addis Ababa, Ethiopia
                        Phone:</p> 
                        <a role="button" className="btn btn-link" style={{color:"white"}} href="+251958134490"><i className="fa fa-phone" /> +251958134490</a> <br/>
                        <a role="button" className="btn btn-link" style={{color:"white"}}href="sjmart22@gmail.com"><i className="fa fa-envelope-o" /> sjmart22@gmail.com</a>
                    </div>  
                    <div className=" col-lg-3 mt-3">
                        <h2>LOCATION</h2>
                        <a role="button" className="btn btn-link" style={{color:"white"}} href="https://goo.gl/maps/xF2yjbS2F3fQrTfy8"><i className="fa fa-map-marker"/> Head Office</a> <br/>
                        <a role="button" className="btn btn-link" style={{color:"white"}} href="https://goo.gl/maps/5cY3uLkaQd82DKKw5"><i className="fa fa-map-marker"/> Branch office</a>
                    </div>
                </div>
                <div className="row footer-content mt-5">
                    <div className="col-lg-6 solcial-footer mt-3 ">
                    <h3></h3>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
                    </div>
                    <div class="col-lg-5 mt-2"><hr/>
                        <a role="button" className="btn btn-link" style={{color:"white"}} href="https://github.com/winneramsalu"><i className="fa fa-copyright fa-md" /><i>2021 | Designed & coded with 💙 by Tewabe T</i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;