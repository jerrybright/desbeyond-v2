import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footercol-1 footercol">
                    <h3>Contact</h3>
                    <ul>
                    <li><i class="fa fa-phone"></i>+91 9551758115 </li>
                        <li><i class="fa fa-phone"></i>+91 8754066170 </li>
                           <li><i class="fa fa-phone"></i>+91 8015531319 </li>
                    </ul>
                </div>
                <div className="footercol-2 footercol">
                    <h3>Location</h3>
                    <ul>  
                            <li> <i class="fa fa-map-pin"></i>Chennai, India </li>
                            <li><i class="fa fa-map-pin"></i>Pondicherry</li>  
                             <li><i class="fa fa-map-pin"></i>Coimbatore</li>
                    </ul>
                    </div>
                <div className='footercol-3 footercol'>
                    <h3>Social</h3>
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
                <p>Other locations- USA | UK </p>
                <p>Copyright © 2023 Desbeyond Global Services</p>
              </div>
          </div>
        </>
    )
}

export default Footer