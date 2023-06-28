import React from "react";
import { Link } from '@react-email/link';
import './Footer.css'

function Footer() {
    return (
        <footer className="footer col-3">
            <div className="footer-container">
             <a href="https://github.com/itlleat/">
                    <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                </a>
                
                <div onClick={(e) => {window.location.href = 'mailto:scott.schulman84@gmail.com';}}>
                    <img className="logo" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedIn" />
                </div>
                <Link href="scott.schulman84@gmail.com">
                <svg className="logo" viewBox="0 0 48 48" width="480px" height="480px"><path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"/></svg>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;


