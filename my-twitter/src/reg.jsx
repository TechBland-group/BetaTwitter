import { useState } from "react";
import { Link } from "react-router-dom";
import MyImageDark from "./Components/myImageDark";
import Switcher from '../src/Components/Switcher';
import back from '../images/backdark.webp';
import backlight from  '../images/backlight.webp'
 
const Register = () => {
 
    const registerUser = async (e) => {
        e.preventDefault()
 
        const formData = new FormData(e.target);
        let newUser = {};
 
        for (const [key, value] of formData.entries()) {
            newUser[key] = value;
        }
 
        newUser = JSON.stringify(newUser)
        console.log(newUser)
        const response = fetch('http://localhost:8080/Controller/controllerReg.php', {
            method: "POST",
            body: newUser,
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data == true) {
                    console.log("good");
                    window.location.href = '/login';
 
                } else {
                    console.log("bad registration");
                }
            })
    }
 
    return (
        
        <div className="flex justify-center items-center h-screen overflow-hidden">
            
            <div className="bg-cover bg-center h-screen w-screen bg-[url('../images/backlight.webp')] dark:bg-[url('../images/backdark.webp')]">
                <Switcher />
                <div className="grid place-items-center">
                    <MyImageDark />
            <div className="py-7 content-center mt-8 w-6/12 grid gap-4 grid-rows-1 text-center">
                        <h1 className="mb-4 font-bold text-black dark:text-white">Register </h1>
                        
            <form className="grid gap-y-3 grid-rows-1 text-center text-black dark:text-white" onSubmit={registerUser}>
                <label>
                    Name:
                    <input placeholder="Your name" className="ml-4 border-2 rounded-xl border-blue-500 dark:border-red-500 text-black" type="text" name="name" />
                </label>
                <label className="mr-8 text-black dark:text-white">
                    Username:
                    <input placeholder="Your username" className="ml-4 border-2 rounded-xl border-blue-500 dark:border-red-500 text-black" type="text" name="username" />
                </label>
                <label className="mr-9 mt-3 mb-3 text-black dark:text-white">
                    Birthdate:
                    <input className="border-2 rounded-xl border-blue-500 dark:border-red-500 text-black" type="date" name="birthdate" />
                </label>
                <label className="ml-4 text-black dark:text-white">
                    Mail:
                    <input placeholder="Your e-mail adress" className="ml-4 border-2 rounded-xl border-blue-500 dark:border-red-500 text-black" type="email" name="email" />
                </label>
                <label className="mr-5 text-black dark:text-white">
                    Password:
                    <input placeholder="Enter password" className="ml-4 border-2 rounded-xl border-blue-500 dark:border-red-500 text-black" type="password" name="pass" />
                </label>
                <label className="mr-20 text-black dark:text-white">
                    Password Repeat:
                    <input placeholder="Repeat password" className="ml-4 border-2 rounded-xl border-blue-500 dark:border-red-500 text-black" type="password" name="passwordre" />
                </label>
                <div className="ml-12 mt-2 text-center text-black dark:text-white">
                    <input className="transition ease-out duration-700 border-2 rounded-xl text-black border-blue-300 hover:bg-blue-300 hover:border-blue-500 dark:border-red-300 dark:hover:bg-red-300 dark:hover:border-red-500 hover:text-black dark:text-white mr-8" type="submit" value="Register Account" />
                </div>
            </form>
            <p className="text-black dark:text-white">
                Already Have and account? <Link to="/login" className="text-black dark:text-white hover:text-blue-500 dark:hover:text-red-500">Sign In</Link>
            </p>
        </div>
        </div>
            </div>
        </div>
    );
};
 
export default Register;