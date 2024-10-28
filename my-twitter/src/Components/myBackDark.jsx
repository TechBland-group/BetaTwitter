import React, { Component } from 'react'
import back from '../../images/backdark.webp'
import backlight from  '../../images/backlight.webp'

const MyBackDark = () => {

    return (
      <div className="flex justify-center items-center h-screen">
        <img src={back} alt="dark backround image" className='dark:hidden' />
        <img src={backlight} alt="dark backround image" className='hidden dark:block'/>
      </div>
    )

}

export default MyBackDark;
