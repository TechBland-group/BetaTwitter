import { useState, useEffect } from "react";
import MyUpload from "./Components/myUpload";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';  //
const formContainer = " dark:border-white py-8 content-center m-auto mt-5 w-6/12 grid gap-4 grid-rows-1 text-center border-4 rounded-md border-black"

function Profil() {

  const handleProfil = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);//username
    console.log(e.target[1].value);//email
    console.log(e.target[2].value);//password
    alert('vos informations ont été modifié avec succès');
    console.log("OK");


    const formData = {};
    const elements = e.target.elements;

    formData['username'] = elements[0].value;
    formData['mail'] = elements[1].value;
    formData['pwd'] = elements[2].value;

    const submit = JSON.stringify(formData);
    console.log(submit);

    try {
      const reponse = fetch("http://localhost:8080/Controller/controllerProfil.php", {
        method: 'POST',
        body: submit,
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => response.json())
        .then(data => {
          if (typeof (data[0]) == "object") {
            localStorage.setItem("id", (data[0][0]));
            localStorage.setItem("username", (data[0][1]));
            localStorage.setItem("mail", (data[0][6]));
            localStorage.setItem("password", (data[0][8]));
            console.log(data[0]);
          }
          else {
            console.log('ERROR')
          }
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className=" overflow-x-hidden bg-cover bg-center h-screen w-screen bg-[url('../images/backlight.webp')] dark:bg-[url('../images/backdark.webp')] pl-5">
      <div className="text-center h-screen w-screen dark:text-white ">
        <div className="dark:border-white py-8 content-center m-auto mt-5 w-6/12 grid gap-4 grid-rows-1 text-center border-4 rounded-md border-black">
          <h1 className="mb-4 font-bold">Page de profil</h1>
          <form className="grid gap-y-3 grid-rows-1 text-center" onSubmit={handleProfil}>
            <label>
              Username:
              <input className="border-2 rounded-xl border-blue-500 dark:border-red-500" type="text" name="text" />
            </label>
            <label>
              Email:
              <input className="border-2 rounded-xl border-blue-500 dark:border-red-500 mr-8" type="email" name="email" />
            </label>
            <label>
              Password:
              <input className="border-2 rounded-xl border-blue-500 dark:border-red-500 mr-8" type="password" name="password" />
            </label>
            <div className="ml-12 mt-2 text-center">
              <input className="transition ease-out duration-700 w-3/12 border-2 rounded-xl border-blue-300 dark:border-red-300 hover:bg-blue-300 dark:hover:bg-red-300 over:border-red-500 dark:hover:border-red-500 dark:hover:text-white mr-8" type="submit" value="Modifier" />
            </div>
          </form>
        </div>
        <Follow />
        <MyUpload />
      </div>

    </div>
  );

}

function Follow() {
  const [listFollowers, setlistFollowers] = useState([]);
  const [listFollowing, setlistFollowing] = useState([]);

  const handleFollowing = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/Controller/controllerGetFollowing.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(localStorage.getItem('id')),
    })
      .then(response => response.json())
      .then(data => {
        setlistFollowing(data);
        console.log(listFollowing);
      });

  }


  const handleFollowers = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/Controller/controllerGetFollowers.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(localStorage.getItem('id')),
    })
      .then(response => response.json())
      .then(data => {
        setlistFollowers(data);
        console.log(listFollowers);
      });
  }


  const button = " m-auto px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"

  return <>

    <div className={formContainer}>
      <div >
        <button onClick={handleFollowers} className={button}>Followers</button>
        <ul>
          {
            listFollowers.map(follower => (
              <li key={uuidv4()}>
                
              <Link to={`/profil/userPage/${follower.username}/${follower.id}`} className="text-blue-800 dark:text-red-800 dark:hover:text-white hover:text-white px-4">{follower.username}</Link>

              </li>
            ))
         }
        </ul>
      </div>
      <div >
        <button onClick={handleFollowing} className={button}>Following</button>
        <ul>
          {
            
            listFollowing.map(following => (
              <li key={uuidv4()}>

              <Link to={`/profil/userPage/${following.username}/${following.id}`} className="text-blue-800 dark:text-red-800 dark:hover:text-white hover:text-white px-4">{following.username}</Link>

              </li>
            ))
          }
        </ul>
      </div>
    </div>
  </>
}

export default Profil;