import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

function Footer(){
  return (
    <div>
        <div className='footer-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-11'>
                        <div className='footer-sec'>
                            <div className='row'>
                                <div className='col-3'>
                                    <div className='foot1'>
                                        <h1>Company</h1>
                                        <p>About</p>
                                        <p>Our Process</p>
                                        <p>Works</p>
                                        <p>Careers</p>
                                        <p>Outsourcing</p>
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className='foot1'>
                                        <h1>Service</h1>
                                        <p>Mobile Development</p>
                                        <p>Web Development</p>
                                        <p>UI/UI Research</p>
                                        <p>Dedicated Team</p>
                                        <p>Product Strategy</p>
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className='foot1'>
                                        <h1>Contacts</h1>
                                        <p>US: +1987 333 4444</p>
                                        <p>UK: +44 7654 333 444</p>
                                        <p>Email: neromax@mail.com</p>
                                        <p>Address: 1109 Bridge Street,<br/>New York City, 8878 USA</p>
                                        
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className='foot1'>
                                        <h1 className='community'>Community</h1>
                                        <div className='atag'>
                                            <p className='blog'>BLOGS</p>
                                            <p>REVIEWS</p>
                                            <p>PROTECTED</p>
                                        </div>
                                        <div className='input-sec'>
                                            <input type='text' name="input1" placeholder='Your Mail*' id="inputs" />
                                            <button>Keep</button>
                                        </div>
                                        <div className='foot-icon'>
                                            <FaFacebookF/>
                                            <TiSocialLinkedin/>
                                            <FaInstagram/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='copyright-sec'>
                            <div className='copy1'>
                                <p>Copyright © 2021 Neromax by <span>BrandMax</span>. All Rights Reserved</p>
                            </div>
                            <div className='copy2'>
                                <p>Sitemap</p>
                                <p>Privacy Policy</p>
                                <p>Terms & Conditions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;