import React from 'react';
import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BsBasket3Fill } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";


function Header(){
  return (
    <div>
        <div className='Image-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='nav-sec1'>
                            <div className='nav-bar'>
                                <div className='email-content'>
                                    <p><IoMdMail /> neromax@mail.com</p>
                                </div>
                                <div className='location-content'>
                                    <p><FaMapMarkerAlt /> 1109 Bridge Street, New York City</p>
                                </div>
                            </div>
                            <div className='icon-content'>
                                <FaFacebookF />
                                <TiSocialLinkedin />
                                <FaInstagram />
                            </div>
                        </div>
                        <div className='nav-sec2'>
                            <div className='row'>
                                <div className='col-1'>
                                    <div className='logo-sec'>
                                        <h1><span>nero</span>max</h1>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='nav-bar2'>
                                        <b>Home <IoIosArrowDown /></b>
                                        <b>Company <IoIosArrowDown /></b>
                                        <b>Solutions <IoIosArrowDown /></b>
                                        <b>PortFolio</b>
                                        <b>Blog <IoIosArrowDown /></b>
                                        <b>Contact</b>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='icon-nav'>
                                        <i><BsBasket3Fill /></i>
                                        <i><IoSearchSharp /></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='banner-sec'>
                            <h4 className="text_1">New To Online Task Management?</h4>
                            <h1 className='text_2'>Manage Less <span className='svgicon1'><GoDotFill /></span></h1>
                            <h1 className="text_4">Do More <span className='svgicon2'><GoDotFill /></span></h1>
                            <h4 className='text_3'>Task Management For Teams.</h4>
                            <button className='btn-sec1 mar1'>Learn More</button>
                            <button className='btn-sec2 mar2'>Request a Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header