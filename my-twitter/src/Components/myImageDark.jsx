import React, { Component } from 'react'
import y from '../../images/y.png'
import yinverted from  '../../images/yinverted.png'

const MyImageDark = () =>{
    return (
      <div>
        <img className='w-3/12 m-auto hidden dark:block' src={yinverted} alt="project Y logo"/>
        <img className='w-3/12 m-auto dark:hidden' src={y} alt="project Y logo"/>
      </div>
    )
}

export default MyImageDark;