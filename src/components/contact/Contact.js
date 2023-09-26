import React, {useState} from 'react'
import { TextField, Button } from '@mui/material';
import { send } from 'emailjs-com'
import './contact.css'


const Contact = () => {

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
    {/* <div className = "contactHeaderAndFormContainer">   */}
    
    <div id='contactNavId' className='contactHeader'>
      <span className='contactMeHeaderText'>Contact Me!</span>
    </div>
    <div className = 'contactContainer'>
        <form 
          onSubmit={handleSubmit}
          className='contactSubmitForm'>

          <TextField
              required
              variant="filled"
              className='submitInput'
              // backgroundColor="white"
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
            href='https://github.com/ryanCodes92109'>
            <img 
              className='githubProfileLink'
              src={'./gh.jpg'}
            ></img>

          </a>
        </div>
      {/* </div> */}
      </>
  )
}

export default Contact