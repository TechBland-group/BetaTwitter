import React, { Component } from 'react'

const MyButton= ({children, ... props}) => {

    return (
      <button {...props} className='dark:text-white text-black transition ease-out duration-700 border-2 rounded-xl border-blue-300 hover:bg-blue-300 hover:border-blue-500 dark:border-red-300 dark:hover:bg-red-300 dark:hover:border-red-500 hover:text-white" ml-3 px-2'>
        {children}
      </button>
    )
  }


  export default MyButton;
