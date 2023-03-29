import React, {useState} from 'react'
import './Contact.css'
import { TextField } from '@mui/material'
import { send } from 'emailjs-com'

const Contact = () => {
    const [toggleSubmitForm, setToggleSubmitForm] =useState(false)

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

    <div className = 'contactContainer'>
        <form 
            onSubmit={handleSubmit}
            className='contactSubmitForm'>
            <TextField
                className='submitInput'
                sx={{
                    width:250
                    }}
                label="Name"
                onChange={handleChange}
                name='from_name'
                value={toSend.from_name}
            ></TextField>

            <TextField
              sx={{
                width:250
            }}
                className='submitInput'
                label="Email"
                onChange={handleChange}
                name='reply_to'
                value={toSend.reply_to}
            ></TextField>

            <TextField
                className='submitInput'
                label='Message'
                sx={{
                    width:275,
                    // "& .MuiInputBase-root": {
                    //     height: 160
                    // }
                }}
                onChange={handleChange}
                name='message'
                value={toSend.message}
            >
            </TextField>


            <button 
                type='submit'
                className='emailButton'
            >Send</button>

        </form>
        
        <div
            className='socialLinkContainer'
        >
        <br/>
            <a href='https://www.linkedin.com/in/ryansul/'>
                <img
                    className='linkedinProfileLink'
                    src={'./linkedinlog.jpg'}
                />
            </a>
        </div>
    </div>
  )
}

export default Contact
