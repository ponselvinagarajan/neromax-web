
import React from 'react';
import { PiCircuitryBold } from "react-icons/pi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { BsNut } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";

function Fifth_sec(){
  return (
    <div>
        <div className='process-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='Process-sec'>
                            <h4 className='Head1'>OUR PROCESS</h4>
                            <h1>The development process</h1>
                            <p >Creating a website is a very complex and painstaking process that takes a lot of time. The best web designers are the ones who take the time to get this process right.</p>
                        </div>
                        <div className='card-sec1'>
                            <div className='card1'>
                                <p className='blue'>1</p>
                                <span><PiCircuitryBold /></span>
                                <h1>Consultation</h1>
                            </div>
                            <div className='card1'>
                                <p>2</p>
                                <span><GrNotes /></span>
                                <h1>Specification</h1>
                                
                            </div>
                            <div className='card1'>
                                <p>3</p>
                                <span><BsNut /></span>
                                <h1>Development</h1>
                                
                            </div>
                            <div className='card1'>
                                <p>4</p>
                                <span><VscFeedback /></span>
                                <h1>Feedback</h1>
                                
                            </div>
                            <div className='card1'>
                                <p>5</p>
                                <span><MdOutlineRocketLaunch /></span>
                                <h1>Launch</h1>
                                
                            </div>
                            <div className='card1'>
                                <p>6</p>
                                <span><MdOutlineSupportAgent /> </span>
                                <h1>Support</h1>
                                
                            </div>
                        </div>
                        <div className='content-card'>
                            <div className='card-head'>
                                <h1>Consultation</h1>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College</p>

                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                            </div>
                            <div className='card-img'>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fifth_sec;