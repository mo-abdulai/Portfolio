import React from 'react'
import {BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa';
const socialMedia = () => {
  return (
    <div className='app__social'>
       <div>
        <a href='https://www.linkedin.com/in/mo-abdulai/'>
       <FaLinkedin/>
        </a>
      </div>
      <div>
       <a href='https://twitter.com/mo_abdulai?s=21'>
       <BsTwitter/>
       </a>
      </div>
      <div>
        <a href='#'>
       <BsInstagram/>
        </a>
      </div>
    </div>
  )
}

export default socialMedia
