import React from 'react'
import { LinkedinIcon,GithubIcon,  } from '../constants/Icon'
const Card = () => {
    return (
        <div className='flex flex-col border-2 rounded-3xl justify-end w-[50vw] '>
            <div className='flex-row flex-1 p-4'>
                <p className='text-white text-lg  text-center '>
                    kado
                </p>
            </div>
            <div className='flex-row flex justify-center p-4 gap-6'>
                <a href='https://www.linkedin.com/in/kadirerentugran/' > <LinkedinIcon height='80px' />
                </a>
                <a href='https://github.com/KadirErenTugran'>
                    <GithubIcon height='80px'/>
                </a>
            </div>
        </div>
    )
}

export default Card