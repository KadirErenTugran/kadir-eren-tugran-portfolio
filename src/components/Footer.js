import React from 'react'
import { GithubIcon, LinkedinIcon } from '../constants/Icon';
import ParticlesComponent from './Particles';
const Footer = () => {
  return (
    <div className='bottom-0 fixed h-[15vh] w-screen bg-black'>
      <div className='flex flex-row md:pt-[3vh] justify-center gap-12'>
        <div className='hover:animate-wiggle '>
          <GithubIcon height='80px' />
        </div>
        <div className='hover:animate-wiggle'>
          <LinkedinIcon height='80px' />
        </div>
      </div>
      <container className='fixed bottom-0 w-screen -z-20'>
        <ParticlesComponent/>
      </container>
      
    </div>
  )
}

export default Footer;