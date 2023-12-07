import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footercol-1 footercol">
                    <h3>Company</h3>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className="footercol-2 footercol">
                    <h3>Contact Us</h3>
                    <ul>
                            <li><p>+91 9551758115 
                                +91 8754066170 
                                +91 8015531319 </p></li>
                            
                            <li><p>2, GK Moopanar Road,<br /> New Perungalathur,<br /> Chennai - 63, Tamil Nadu, India</p></li>
                    </ul>
                    </div>
                <div className='footercol-3 footercol'>
                    <h3>social</h3>
                    <div class="social-links">
                        <a href="https://www.facebook.com/profile.php?id=61552194054868&mibextid=kFxxJD" target='_blank'>
                            <i class="fa fa-facebook"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/desbeyond-global/" target='_blank'>
                        <i class="fa fa-linkedin"></i>
                        </a>
                        <a href="https://instagram.com/desbeyond_global?igshid=NzZlODBkYWE4Ng==" target='_blank'>
                        <i class="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
          <div>
              <div className="footercol-5">
                <p>Other locations- Puducherry | Coimbatore </p>
                <p>Copyright © 2023 Desbeyond Global Services</p>
              </div>
          </div>
        </>
    )
}

export default Footer