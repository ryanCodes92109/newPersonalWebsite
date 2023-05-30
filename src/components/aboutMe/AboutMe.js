import React, {useState} from 'react'
import './AboutMe.css'
import { TextField, Button } from '@mui/material'

const AboutMe = () => {

 

  return (
    <>
      <div id='aboutMeNavId' className='aboutMeContainer'>
        <br/>
          <div className = 'introContainer'>
          <span id='aboutMeWelcome' > Welcome!</span> <br/>
            <span className ='briefIntro'> I'm Ryan, a curious and passionate Fullstack Engineer. Nice to meet you! </span> <br/>
          </div>
          <div className='landingPagePhotoContainer'>
            <img className='landingPagePhoto' src='./landingpage.jpg' /> 
          </div>
        
            {/* <article className='aboutMeText'> 
              Hi there! <br/> <br/>My name is Ryan, and I'm a software engineer who recently completed the Fullstack Engineering program at Flatiron School. Prior to this, I worked as a technical recruiter at Google, Zillow, and Rivian.
            <br/>
            <br/>
              My experience in recruiting allowed me to gain a deep understanding of the tech industry and the skills that are most in-demand in today's job market. However, I realized that I wanted to be more directly involved in the creation of new products, rather than just finding the right people to build them.
             <br/>
             <br/>
              That's why I decided to make the switch to software engineering and enrolled in the Fullstack Engineering program at Flatiron School. During the course of the program, I gained hands-on experience with a wide range of technologies, including JavaScript, React, Ruby on Rails, and SQL. I also honed my problem-solving and critical thinking skills, which are essential for any software engineer.
              <br/>
              <br/>

           
              Now that I've completed the program, I'm excited to apply my skills and experience to help create innovative new products and services. Whether you're looking to build a web app, a mobile app, or something else entirely, I'm eager to collaborate with you and turn your ideas into reality.
              <br/>
              <br/>

              Thank you for taking the time to learn a bit more about me. If you have any questions, please feel free to email directly with the form (created with EmailJS) below! 
            </article> */}

      </div>



     
    </>
  )
}

export default AboutMe
