import { GoDotFill } from "react-icons/go";

const Sixth_sec =() =>{
    return(
       <div>
           <div className="teams">
                <div className="team_cont">
                         <div className="Team_head">
                              <h3>CASE STUDIES</h3>
                              <h1>Our Latest Case Studies<span><GoDotFill /></span> </h1>
                           </div>
                           <div className="btn">
                               <p>View More</p>
                        </div>
                </div>
                <ol className="nav_list">
                    <li>All</li>
                    <li>Design</li>
                    <li>Development</li>
                    <li>Idea</li>
                    <li>Technology</li>
                </ol>
                <div className="portfolio">
                    <div className="port_card">
                        <div className="port_img">
                            <img src="../1.jpg" alt=" "/>
                        </div>
                        <div className="port_content">
                            <h2>Analysis of security</h2>
                            <h3>Design / Technology</h3>
                        </div>
                    </div>
                    <div className="port_card ">
                        <div className='bg_color'></div>
                        <div className="port_img">
                            <img src="../2.jpg" alt=" "/>
                        </div>
                        <div className="port_content">
                            <h2>Analysis of security</h2>
                            <h3>Design / Technology</h3>
                        </div>
                    </div>
                    <div className="port_card">
                        <div className="port_img">
                            <img src="../3.jpg" alt=" "/>
                        </div>
                        <div className="port_content">
                            <h2>Analysis of security</h2>
                            <h3>Design / Technology</h3>
                        </div>
                    </div>
                    <div className="port_card">
                        <div className="port_img">
                            <img src="../4.webp" alt=" "/>
                        </div>
                        <div className="port_content">
                            <h2>Analysis of security</h2>
                            <h3>Design / Technology</h3>
                        </div>
                    </div>
                    <div className="port_card">
                        <div className="port_img">
                            <img src="../5.webp" alt=" "/>
                        </div>
                        <div className="port_content">
                            <h2>Analysis of security</h2>
                            <h3>Design / Technology</h3>
                        </div>
                    </div>
                    <div className="port_card">
                        <div className="port_img">
                            <img src="../6.jpg" alt=" "/>
                        </div>
                        <div className="port_content">
                            <h2>Analysis of security</h2>
                            <h3>Design / Technology</h3>
                        </div>
                    </div>

                </div>     
            </div> 
                 
        </div>
    )
}
export default Sixth_sec;