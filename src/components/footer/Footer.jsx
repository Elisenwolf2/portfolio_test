import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>ELISENWOLF</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://facebook.com/Elisenwolf25' target='_blank'><FaFacebookF /></a>
        <a href='https://www.instagram.com/elisen_wolf' target='_blank'><BsInstagram /></a>
        <a href='https://twitter.com/Elisenwolf' target='_blank'><IoLogoTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; ElisenWolf All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer