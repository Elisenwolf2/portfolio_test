import React from 'react'
import './about.css'
import CODE from '../../assets/code.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={CODE} alt='Error' />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ years programming </small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
           <p>
           Hi. I’m a Front-End Developer with a knack in React , Javascript, HTML, CSS, GitHub, NodeJs and completed my BCA degree from Mahatma Gandhi University Kerala
           and also completed 100 days bootcamp from School Of Accelerated Learning(SOAL) Hyderabad.Other hobbies love to draw.
           </p> 
           <a href='#contact' className='btn btn-primary'>Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About