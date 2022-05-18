import React, { useCallback } from 'react'
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import particlesOptions from "../../particles.json"
import avatar from '../../assets/avatar.jpg'
import resume from '../../assets/CV.pdf'
import {FaLinkedin, FaFacebook, FaEnvelope, FaPhoneAlt, FaFilePdf} from 'react-icons/fa'
import {useMediaQuery} from 'react-responsive'


function Home() {
  const particlesInit = useCallback(main => {
    loadFull(main);
}, [])

const isMobile  = useMediaQuery({
  query: '(max-width: 440px)'
})


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
          href='https://www.linkedin.com/in/noy-ben-david/'
          target='_blank'
          rel='noreferrer'>
            <FaLinkedin className='m-2'/>
          </a> 

        <a className='myFont'
          href='https://www.facebook.com/noy.bendavid.5'
          target='_blank'
          rel='noreferrer'
         >
            <FaFacebook className='m-2'/>
          </a>

        <a className='myFont'
           href='mailto:noybd95@gmail.com'
           data-bs-toggle="tooltip" data-bs-placement="top" title="Contact With Mail"
        >
          <FaEnvelope className='m-2 text-white'/>
        </a>

        {isMobile &&  
        <a className='myFont'
           href='tel:+972-052-444-8457'
           data-bs-toggle="tooltip" data-bs-placement="top" title="Contact With Phone"
        >
          <FaPhoneAlt className='m-2 text-white'/>
        </a>
        }

        <a className='myFont'
           href={resume}
           download
           data-bs-toggle="tooltip" data-bs-placement="top" title="Download CV"
        >
          <FaFilePdf className='m-2 text-white'/>
        </a>
        </div> 
      </div>
         
      </div>
    
  </>
  )
}

export default Home
