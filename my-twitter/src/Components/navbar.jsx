import { Link } from "react-router-dom";
import React from 'react';
import MyImage from "./myImage";
import Switcher from './Switcher';
import MyImageDark from "./myImageDark";

    const Navbar = () => {

      const handleProfile = () => {
        window.location.href = `/profil/${localStorage.getItem('username')}`;
      };
      const handleFeed = () => {
        window.location.href = `/feed2/${localStorage.getItem('username')}`;
      };
      /*const handleMessages = () => {
        window.location.href = `/profil/${localStorage.getItem('username')}`
      }*/

       const styleButton = "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all dark:hover:bg-red-50 hover:bg-blue-50 hover:bg-opacity-80 dark:focus:bg-red-50 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 dark:hover:text-red-900 dark:text-red-900 text-blue-900 dark:focus:text-red-900 focus:text-blue-900 dark:active:text-red-900 active:text-blue-900 outline-none"
     
        return (
        <div className="bg-white dark:bg-black">
          
            <div className=" inherit flex flex-col bg-clip-border rounded-xl bg-white text-gray-300 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl dark:shadow-red-gray-900/5 shadow-blue-gray-900/5 dark:bg-black">
              <Switcher/>
              <div className="min-w-[400px]">
              <MyImageDark/>
              </div>
              <nav className=" flex flex-col gap-1 min-w-[250px] p-2 font-sans text-base font-normal dark:text-white text-black">
            <button onClick={handleFeed}> 
            <div role="button" tabIndex="0" className={styleButton}>
            <div className="grid place-items-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
          <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z" clipRule="evenodd"></path>
        </svg>
      </div>
      Feed
    </div>
    </button>
    <Link to="#">
      <div role="button" tabIndex="0" className={styleButton}>
      <div className="grid place-items-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
          <path fillRule="evenodd" d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z" clipRule="evenodd"></path>
        </svg>
      </div>Messages <div className="grid place-items-center ml-auto justify-self-end">
                          <span className="relative flex h-3 w-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 dark:bg-red-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600 dark:bg-red-600"></span>
</span>
      </div>
    </div>
    </Link>
    <button onClick={handleProfile}>
      <div role="button" tabIndex="0" className={styleButton}>
      <div className="grid place-items-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
          <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd"></path>
        </svg>
      </div>Profil
    </div>
    </button>
    <Link to="/register">
      <div role="button" tabIndex="0" className={styleButton}>
      <div className="grid place-items-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
          <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z" clipRule="evenodd"></path>
        </svg>
      </div>Déconnexion
    </div>
    </Link>
  </nav>
  </div>
        </div>
        
    )
    }


export default Navbar;