import React from 'react'
import ParticlesComponent from './Particles'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className=' h-[15vh] w-screen fixed top-0  '>
            <ul className=' flex flex-row max-h-[15vh] gap-14 text-3xl justify-end  items-center md:mt-[5vh]  max-w-[90vw] font-bold text-white'>
                <Link className='z-10' to='/'>
                    <li>
                        Home
                    </li>
                </Link>
                <Link className='z-20' to='/aboutme'>
                    <li>
                        About Me!
                    </li>
                </Link>
                <li>
                    Skills
                </li>
                <li>
                    Projects
                </li>
                <li>
                    Contacts
                </li>
            </ul>
            <container className='top-0 fixed w-screen h-screen '>
                <ParticlesComponent id='tsParticles' />
            </container>
        </div>

    )
}

export default Navbar