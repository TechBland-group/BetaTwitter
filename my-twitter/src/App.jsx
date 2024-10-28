import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Login from './login';
import Register from './reg';
import Feed from './feed';
import Feed2 from './feed2';
import Profil from './profil';
import Navbar from './Components/navbar';
import UserPage from './Components/userSearch/profil/userPage';
import Comment from "./comment";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path={'/'}></Route>
        <Route element={<Login />} path={'/login'}></Route>
        <Route element={<Register />} path={'/register'}></Route>
        <Route element={
          <>
            <div className='flex absolute'>
              <Navbar />
              <Feed />
            </div> 
        </>
        } path={'/feed'}>
        </Route>
        <Route element={
          <>
            <div className="flex">
              <Navbar />
              <Feed2 />
            </div>
          </>}
          path={'/feed2/:username'}></Route>
        <Route element={<>
            <div className="flex absolute">
              <Navbar />
          </div>
          <Profil />
          </>} path={'/profil/:username'}></Route>
        <Route element={<Navbar />} path={'/navbar'}></Route>
        <Route element={<UserPage />} path={'/profil/userPage/:username/:id'}></Route>
        <Route element={<Comment />} path={'/tweetAndcomment/:id'}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
