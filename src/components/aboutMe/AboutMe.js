import React, {useState} from 'react'
import './AboutMe.css'
import { TextField, Button } from '@mui/material'
import { send } from 'emailjs-com'

const AboutMe = () => {

  const emailjsFormValues = {
    from_name:'',
    to_name:'',
    message:'',
    reply_to:''
}

const [toSend, setToSend] = useState(emailjsFormValues);

const handleSubmit = (e) => {
    e.preventDefault()
    send(
        'service_g6lajha',//serviceID from emailJS
        'template_wyghmzp',//templateID for the template I made in emailJS
        toSend, //state variable
        '7p7ctx16LktKxVFg1'//userId from emailJS
        )
    setToSend(emailjsFormValues)
}

const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]:e.target.value});
}

  return (
    <>
      <div className='aboutMeContainer'>
        <br/>
        
            <p className='aboutMeText'> 
              Hi there! My name is Ryan, and I'm a software engineer who recently completed the Fullstack Engineering program at Flatiron School. Prior to this, I worked as a technical recruiter at Google, Zillow, and Rivian.
            </p>
            <p className='aboutMeText'>
              My experience in recruiting allowed me to gain a deep understanding of the tech industry and the skills that are most in-demand in today's job market. However, I realized that I wanted to be more directly involved in the creation of new products, rather than just finding the right people to build them.
            </p>
            <p className='aboutMeText'>
              That's why I decided to make the switch to software engineering and enrolled in the Fullstack Engineering program at Flatiron School. During the course of the program, I gained hands-on experience with a wide range of technologies, including JavaScript, React, Ruby on Rails, and SQL. I also honed my problem-solving and critical thinking skills, which are essential for any software engineer.
            </p> 
            <p className='aboutMeText'>
              Now that I've completed the program, I'm excited to apply my skills and experience to help create innovative new products and services. Whether you're looking to build a web app, a mobile app, or something else entirely, I'm eager to collaborate with you and turn your ideas into reality.
            </p>
            <p className='aboutMeText'>
              Thank you for taking the time to learn a bit more about me. If you have any questions, please feel free to email directly with the form (created with EmailJS) below! 
            </p>

      </div>



      <div className = 'contactContainer'>

        {/* <div className='emailMeLabel'>
          <p>Email me directly!</p>
        </div> */}
        
        <form 
          onSubmit={handleSubmit}
          className='contactSubmitForm'>

          <TextField
              required
              variant="filled"
              className='submitInput'
              backgroundColor="white"
              sx={{
                  width:150
                            
                  }}
                            
              label="Name"
              onChange={handleChange}
              name='from_name'
              value={toSend.from_name}
          ></TextField>
        
            <TextField
              required
              variant="filled"
              sx={{
                width:170
              }}
              className='submitInput'
              label="Email"
              onChange={handleChange}
                        name='reply_to'
              value={toSend.reply_to}
            ></TextField>
            <br/>
        
            <TextField
              required
              variant="filled"
              className='submitInput'
              label='Write your message here'
              size='large'
              multiline
              minRows={1}
              sx={{
                width:250
              }}           
              onChange={handleChange}
              name='message'
              value={toSend.message}>
            </TextField>
        
            <Button 
              variant="contained" 
              // endIcon={<SendIcon />}
              type='submit'
              className='emailButton'
        
              >
              Send</Button>
        </form>
          <a 
          target='_blank'
          rel="noopener noreferrer"
          className='socialLinkContainer'
          href='https://www.linkedin.com/in/ryansul/'>
            <img
                className='linkedinProfileLink'
                src={'./linkedinlog.jpg'}/> 
          </a>
          <a 
            target='_blank'
            rel="noopener noreferrer"
            className='socialLinkContainer'
            href='https://github.com/ryanCodesFrontEnd'>
            <img 
              className='githubProfileLink'
              src={'./gh.jpg'}
            />

          </a>
        </div>
    </>
  )
}

export default AboutMe
