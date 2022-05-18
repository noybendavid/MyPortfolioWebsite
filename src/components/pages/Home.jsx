import React, { useCallback } from 'react'
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import particlesOptions from "../../particles.json"
import avatar from '../../assets/avatar.jpg'
import {FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'


function Home() {
  const particlesInit = useCallback(main => {
    loadFull(main);
}, [])


  return (
    <>        
    <Particles className='particles' options={particlesOptions} init={particlesInit} />
    <div className='container text-center w3-animate-opacity' >
      <div className="wrapper">
        <img src={avatar} alt="avatar" className='avatar' />
        <h1 className='myFont-h1'>Noy Ben-David</h1>
        <h4 className='myFont-h4'>Highly Motivated Software Developer</h4> 
        <div className='flex flex-col'>

        <a className='myFont'
          href='https://github.com/noybendavid'
          target='_blank'
          rel='noreferrer'>
            <FaGithub className='m-3'/>
          </a> 

        <a className='myFont'
          href='https://www.linkedin.com/in/noy-ben-david/'
          target='_blank'
          rel='noreferrer'>
            <FaLinkedin className='m-3'/>
          </a> 

        <a className='myFont'
          href='https://www.facebook.com/noy.bendavid.5'
          target='_blank'
          rel='noreferrer'>
            <FaFacebook className='m-3'/>
          </a>
        </div> 
      </div>
         
      </div>
    
  </>
  )
}

export default Home
