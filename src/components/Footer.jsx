import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#603F83FF] text-[#eaeaea] py-4">
      <div className="container mx-auto px-24 flex justify-between items-center">
        <p className="text-sm">© {new Date().getFullYear()} <strong>CraveRush.</strong> All rights reserved.</p>

        <div className="flex space-x-4">
        <p className="text-sm">Created by <strong>Shyam</strong></p>
          {/* GitHub Icon */}
          <a 
            href="https://github.com/shyamn17" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub Profile"
            className="text-[#C7D3D4FF] hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          {/* LinkedIn Icon */}
          <a 
            href="https://www.linkedin.com/in/shyam-n-95790616a/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn Profile"
            className="text-[#C7D3D4FF] hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          {/* Email Icon */}
          <a 
            href="mailto:shyamn2001@gmail.com" 
            aria-label="Email"
            className="text-[#C7D3D4FF] hover:text-white"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
