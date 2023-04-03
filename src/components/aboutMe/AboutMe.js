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
        
        <div className='aboutMeInfo'>
          <div className ='infoTextContainer'>
            <p> 

                  Hi! I'm Ryan, and I am a Fullstack Engineer. I've made a huge change in my life and decided to learn some new skills that would allow me to expand more personally and professionally. I'm an ex-Technical Recruiter with companies like Google, Zillow and Rivian, but finally had the chance to pursue a different career path after 10 years. 

            </p>
            <p>
                  I completed the Flatiron School Fullstack Engineering program in 2023 and really enjoyed building my <strong>projects</strong> while getting a strong grasp on Javascript, React and Ruby/Rails. I really enjoyed working closely with the Frontend of my app specifically and really hope I get the chance to utilize my creativity and enhance my UI skills!
            </p>
            <p>
                  Feel free to <strong>contact</strong> me if I may be a good fit for any open positions you know of! In the meantime, here are a bunch of pictures of my dogs.
            </p> 
          </div>


        <div className = 'contactContainer'>
          <form 
            onSubmit={handleSubmit}
            className='contactSubmitForm'>

            <TextField
                required
                variant="filled"
                className='submitInput'
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

        </div>

        </div> 
      
        <div className='socialLinkContainer'>
        <p>Lets connect!  </p> 
        <br/>
        <a href='https://www.linkedin.com/in/ryansul/'>
            <img
                className='linkedinProfileLink'
                src={'./linkedinlog.jpg'}/> 
        </a>
        </div>
      </div>

    </>
  )
}

export default AboutMe
