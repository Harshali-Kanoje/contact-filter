import React, { useState } from 'react'
// import {data} from './../../data/phonebook'
import {data} from './../../data/phonebook'
import Contact from '../../component/Contact/Contact'

const App = () => {
  console.log(data)
  const [contact ,setContact] = useState(data)
  return (
    <div>
      {
        data.map((element,index) => {
          const {name,number} = element;
          return <Contact name={name} number={number} key={index}/>
        })
      }
    </div>
  )
}

export default App
