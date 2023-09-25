import React from 'react'
import './Contact.css'

const Contact = ({name,number}) => {
  return (
    <div
    className='contact'>
      <span>{name}</span>
      <span>{number}</span>
    </div>
  )
}

export default Contact
