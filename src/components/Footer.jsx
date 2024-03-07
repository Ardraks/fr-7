import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaBehance } from "react-icons/fa";
import IconButton from '@mui/material/IconButton';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { IconContext } from "react-icons";

import { FaTwitter, FaLinkedin} from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="top1">
          <div>
          <IconButton
            size="large"
            edge="start"
            color="#FFFFFF"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AutoStoriesIcon style={{color:'#FFFFFF',marginLeft:'-550px'}}/>
          </IconButton>
            <h1>BLOG BOOK</h1>
           
          </div>
          <div className="icons-container">
            <IconContext.Provider value={{ style: { fontSize: '1.5em', color: 'white', marginRight: '1em' } }}>
              <a href="https://www.facebook.com/login/?privacy_mutation_token=...">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/prithvi_lal_/">
                <FaInstagram />
              </a>
              <a href="https://in.linkedin.com//">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/?lang=en/">
                <FaTwitter/>
              </a>
              <a href="https://www.behance.net//">
                <FaBehance/>
              </a>
            </IconContext.Provider>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h4>Project</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
          </div>
          <div>
            <h4>Community</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
          </div>
          <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact Us</a>
          </div>
          <div>
            <h4>Others</h4>
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
            <a href="/">License</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
