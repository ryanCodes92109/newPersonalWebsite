import React, {useState} from 'react'
import './Contact.css'
import { TextField } from '@mui/material'

const Contact = () => {
    const [toggleSubmitForm, setToggleSubmitForm] =useState(false)

  return (
    <div className = 'contactContainer'>
        <div className='contactSubmitForm'>
            <TextField
                className='submitInput'
                sx={{
                    width:290
                    }}
                label="Name"
            ></TextField>
            <br/>
            <TextField
              sx={{
                width:290
            }}
                className='submitInput'
                label="Email"
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
            >

            </TextField>
{/*            
            <label class="mdc-text-field mdc-text-field--outlined mdc-text-field--textarea mdc-text-field--no-label">
                <span class="mdc-notched-outline">
                    <span class="mdc-notched-outline__leading"></span>
                    <span class="mdc-notched-outline__trailing"></span>
                </span>
                <span class="mdc-text-field__resizer">
                    <textarea class="mdc-text-field__input" rows="8" cols="40" aria-label="Label"></textarea>
                </span>
            </label> */}
        </div>

{/* 
        <div className = 'contactInfo'>
            <p className='contactContent'>Hello</p>
        </div>

        <div className = 'contactInfo'>
            <p className='contactContent'>Hello</p>
        </div>

        <div className = 'contactInfo'>
            <p className='contactContent'>Hello</p>
        </div>

        <div className = 'contactInfo'>
            <p className='contactContent'>Hello</p>
        </div>

        <div className = 'contactInfo'>
            <p className='contactContent'>Hello</p>
        </div>

        <div className = 'contactInfo'>
            <p className='contactContent'>Hello</p>
        </div>

        <div className = 'contactInfo'>
            <p className='contactContent'>Hello</p>
        </div>

        <div className = 'contactInfo'>
            <p className='contactContent'>Hello</p>
        </div> */}

    </div>
  )
}

export default Contact
