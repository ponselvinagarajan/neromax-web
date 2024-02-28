
import React from 'react'
// import { FcBullish } from "react-icons/fc";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { TbCloudDataConnection } from "react-icons/tb";
import { PiCircuitryBold } from "react-icons/pi";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";


const Second_sec = () => {
  return (
    <>
        <div className='Banner_sec'>
        <div className='second_sec'>
            <h3>WHAT WE DO</h3>
            <h1>We Make Things Possible</h1>
            <p>Our solutions are simple, robust and are aesthetically designed to keep the customer engaged to
             <br/>deliver consistent growth for your business.</p>
        </div>
    </div>    
        <div className='item'>
            <div className='icon_detail'>
                <div className='details'>
                    <div className='icon'><BsGraphUpArrow /></div>
                    <h3>Marketing</h3>
                    <p className='content'>Rely on our Market Intelligence platform to get the latest trends on the IT Services Industry</p>
                    <p className='icon_item'>READ MORE <FaArrowRightLong /></p>
                </div>
            </div>
            <div className='icon_detail'>
                <div className='details'>
                    <div className='icon'>< CgWebsite /></div>
                    <h3>Web Development</h3>
                    <p className='content'>We specialize in website development services. Our team know how to build a website</p>
                    <p className='icon_item'>READ MORE <FaArrowRightLong /></p>
                </div>
            </div>
            <div className='icon_detail'>
                <div className='details'>
                    <div className='icon'><TbCloudDataConnection /> </div>
                    <h3>Big Data & Analytics</h3>
                    <p className='content'>Make better and faster decisions by data your time to insights using breakthrough business NeroMax</p>
                    <p className='icon_item'>READ MORE <FaArrowRightLong /></p>
                </div>
            </div>
            <div className='icon_detail1'>
                <div className='details'>
                    <div className='icon'>< PiCircuitryBold/> </div>
                    <h3>UX/UI Strategy</h3>
                    <p className='content'>Our user experience consultants offer a wide range of consulting and training UX/UI services</p>
                    <p className='icon_item'>READ MORE <FaArrowRightLong /></p>
                </div>
            </div>
            <div className='icon_detail1'>
                <div className='details'>
                    <div className='icon'>< FaMobileAlt /></div>
                    <h3>Mobile Development</h3>
                    <p className='content'>We build each app to ensure high performance? affordable and low infrastructure costs.</p>
                    <p className='icon_item'>READ MORE <FaArrowRightLong /></p>
                </div>
            </div>
            <div className='icon_detail1'>
                <div className='details'>
                    <div className='icon'><MdOutlineSecurity /></div>
                    <h3>Server Security</h3>
                    <p className='content'> We Offer server security focuses on the protection of data and resources held on the servers.</p>
                    <p className='icon_item'>READ MORE <FaArrowRightLong /></p>
                </div>
            </div>
        </div>

    </>
  )
}
export default Second_sec;
