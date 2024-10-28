import { Link } from "react-router-dom";
import MyImageDark from "./Components/myImageDark";
import back from '../images/backdark.webp';
import Switcher from '../src/Components/Switcher';
import {v4 as uuidv4} from 'uuid';
function Login() {
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {};
        const elements = e.target.elements;
 
        formData['mail'] = elements[0].value;
        formData['pwd'] = elements[1].value;
 
        const emballePese = JSON.stringify(formData);
        console.log(emballePese);
        try {
            const response = fetch("http://localhost:8080/Controller/controllerLogin.php", {
                method: 'POST',
                body: emballePese,
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                //gestion de la reponse du controller
                .then(response => response.json())
                .then(data => {
 
                    
                    if (typeof(data[0]) == "object") {
                        localStorage.setItem("id", (data[0][0]));
                        localStorage.setItem("username", (data[0][1]));
                        localStorage.setItem("name", (data[0][2]));
                        localStorage.setItem("birthdate", (data[0][5]));
                        localStorage.setItem("mail", (data[0][6]));
                        localStorage.setItem("password", (data[0][8]));
                        window.location.href = `/feed2/${data[0][1]}`;
                        console.log(data[0]);
                    }
                    else {
                        console.log('mauvais mdp ou mail')
                    }
                });
        } catch (error) {
            console.error("Error during fetch:", error);
        }
 
 
    }
 
 
 
 
 
 
return (
    <div className="flex justify-center items-center h-screen">
        <div className="bg-cover bg-center h-screen w-screen bg-[url('../images/backlight.webp')] dark:bg-[url('../images/backdark.webp')]" >
            <Switcher/>
                <div className="grid place-items-center">
        <MyImageDark/>
            <div className="py-7 content-center mt-8 w-6/12 grid gap-4 grid-rows-1 text-center">
                <h1 className="mb-4 font-bold text-black dark:text-white">Login</h1>
                <form className="grid gap-y-3 grid-rows-1 text-center" onSubmit={handleSubmit}>
                    <label className="text-black dark:text-white">
                        Email:
                        <input placeholder="Enter your email to login" className="ml-4 text-black border-2 rounded-xl border-blue-500 dark:border-red-500" type="email" name="email" />
                    </label>
                    <label className="text-black dark:text-white">
                        Password:
                        <input placeholder="Enter your password" className="ml-4 text-black border-2 rounded-xl border-blue-500 dark:border-red-500  mr-8" type="password" name="password" />
                    </label>
                        <div className="ml-12 mt-2 text-center">
                     <input className=" text-black transition ease-out duration-700 border-2 rounded-xl border-blue-300 hover:bg-blue-300 hover:border-blue-500 dark:border-red-300 dark:hover:bg-red-300 dark:hover:border-red-500 hover:text-black dark:text-white mr-8" type="submit" value="Log in" />
                    </div>
                </form>
                <p className="mt-4 text-center text-black dark:text-white ">
                 Or <Link to="/register" className=" text-black dark:text-white hover:text-blue-500 dark:hover:text-red-500">register</Link>
                </p>
            </div>
            </div>
        </div>
    </div>
);
};
 
export default Login;
 