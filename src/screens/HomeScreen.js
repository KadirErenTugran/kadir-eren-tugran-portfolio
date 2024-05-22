import React from 'react'
import Navbar from '../components/Navbar'
import profilephoto from '../assets/profilephoto.png'
import {ChevronLeftIcon, ChevronRightIcon} from '../constants/Icon'
import Footer from '../components/Footer'
const HomeScreen = () => {
  return (
    <div className='h-screen bg-black flex top-0 w-screen '>
      <Navbar />
      <div className='flex flex-col items-center  w-screen gap justify-center gap-12  '>
        <img
          src={profilephoto} alt='profilephoto' className='w-fit h-[30vh] p-3 border-white border-2 rounded-full  '>
        </img>

        <div className=' flex flex-row gap-96 items-center justify-center'>
        <div className='animate-leftarrow' >
         <ChevronLeftIcon height='50px' />
         </div>
         <h1 className='text-white text-5xl animate-fadein font-sans font-bold uppercase'> Kadir Eren Tugran</h1>
         <div className='animate-rightarrow'>
         <ChevronRightIcon height='50px'/>
         </div>
         </div>
      </div>
       <Footer/>
    </div>
  )
}

export default HomeScreen