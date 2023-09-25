import React, { useEffect, useState } from 'react'
// import {data} from './../../data/phonebook'
import { data } from './../../data/phonebook'
import Contact from '../../component/Contact/Contact'
import './App.css'

const App = () => {
  console.log(data)
  const [contact, setContact] = useState(data)
  const [searchterm, setSearchterm] = useState('')

  useEffect(() => {
    const filerdata = data.filter((element, index) => {
      const name = element.name.toLowerCase()
      const number = element.number.toString()
      const quety = searchterm.toLowerCase()
      return (name.includes(quety) || number.includes(quety))

    })
    setContact(filerdata)
  }, [searchterm])

  return (
    <div className='contact-details'>
      <input type='text' placeholder='search your contacts' value={searchterm} onChange={(e) => {
        setSearchterm(e.target.value)
        // console.log(e)
      }} className='serch-input' />
      <div>
        {
          contact.map((element, index) => {
            const { name, number } = element;
            return <Contact name={name} number={number} key={index} />
          })
        }
      </div>

    </div>
  )
}

export default App
