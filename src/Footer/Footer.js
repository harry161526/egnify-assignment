import React, { Component } from 'react';
import logo from '../images/logo.png';
import footer from '../images/footer.jpg';
import phone from '../images/phone-call.png';
import mail from '../images/envelope.png';
import location from '../images/location.png';
import propertyimage from '../images/fea-product.jpg';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className= "footer">
                <div className="back-color">
                    <div className="footer-block">
                        <h4>About Us</h4>
                        <div className="main-block">
                            <div className="footer-imgbox">
                                <img src={footer} alt="something" />
                            </div>
                            <div className="logo-imgbox">
                                <img src={logo} alt="logo" />
                            </div>
                            <div>
                                Ex elit fugiat pariatur irure nulla voluptate consectetur Lorem id.
                                Ex elit fugiat pariatur irure nulla voluptate consectetur Lorem id.
                            </div>
                        </div>

                        
                    </div>
                    <div className="footer-block">
                        <h4>Hours</h4>
                        <div>
                            <div className="time-block">
                                <div>
                                    Monday - Friday
                                </div>
                                <div>
                                    09AM - 19AM
                                </div>
                            </div>
                            <div className="time-block">
                                <div>
                                    Saturday
                                </div>
                                <div>
                                    09AM - 14AM
                                </div>
                            </div>
                            <div className="time-block">
                                <div>
                                    Sunday
                                </div>
                                <div>
                                    Closed
                                </div>
                            </div>
                        </div>
                        <div className="hours-location-wrapper">
                            <div className="wrapper">
                                <div className="editor-imgbox">
                                    <img src={phone} alt="badge" />
                                </div>
                                &nbsp;&nbsp;+45 6778993000 223
                            </div>
                            <div className="wrapper">
                                <div className="editor-imgbox">
                                    <img src={mail} alt="badge" />
                                </div>
                                &nbsp;&nbsp;office@template.com
                            </div>
                            <div className="wrapper">
                                <div className="editor-imgbox">
                                    <img src={location} alt="locate" />
                                </div>
                                &nbsp;&nbsp;Main str.no 453 ,57483, Los Angeles, CA
                            </div>
                        </div>
                       
                    </div>
                    <div className="footer-block">
                        <h4>Useful Links</h4>
                        <div className="links">
                        <div className="links-1">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Properties</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="links-1">
                            <ul>
                                
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Listings</a></li>
                                <li><a href="#">Properties</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Listings</a></li>
                            </ul>
                        </div>
                        </div>

                        
                    </div>
                    <div className="footer-block">
                        <h4>Featured Properties</h4>
                        <div className="property-imgbox">
                            <img src={propertyimage} alt="property" />
                        </div>
                    </div>

                    <div className="copyrights-container">
                       <p> Copyrights &#169;2018 All Rights Reserved</p>
                    </div>
                </div>
                
            </div>
        )
    }
}
