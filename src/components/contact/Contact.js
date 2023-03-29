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
                    width:290
                    }}
                label="Name"
                onChange={handleChange}
                name='from_name'
                value={toSend.from_name}
            ></TextField>
            <br/>
            <TextField
              sx={{
                width:290
            }}
                className='submitInput'
                label="Email"
                onChange={handleChange}
                name='reply_to'
                value={toSend.reply_to}
            ></TextField>
            <br/>

            <TextField
                className='submitInput'
                label='Message'
                sx={{
                    width:290,
                    "& .MuiInputBase-root": {
                        height: 160
                    }
                }}
                onChange={handleChange}
                name='message'
                value={toSend.message}
            >
            </TextField>
            <br/>

            <button 
                type='submit'
            >Submit</button>

        </form>
    </div>
  )
}

export default Contact
