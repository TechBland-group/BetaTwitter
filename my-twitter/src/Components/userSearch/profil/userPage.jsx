import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const UserPage = ({ children, ...props }) => {
    const receivedData = props
    const { username } = useParams();
    const { id } = useParams();
    const [isFollowing, setIsFollowing] = useState(false);
    useEffect(() => {
        isFollowed();
    }, [id]);
    const handleClick = async() => {
        console.log("toi: " + localStorage.getItem("id") + ". commence à follow : " + id)

        try {
            const response = await fetch("http://localhost:8080/Controller/controllerFollow.php", {
                method: 'POST',
                body: JSON.stringify([localStorage.getItem("id"), id, isFollowing]),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                //gestion de la reponse du controller
                .then(response => response.json())
                .then(data => {
                    console.log(data);!!
                    setIsFollowing(data);
                });
        } catch (error) {
            console.error("Error during fetch:", error);
        }
        isFollowed();

    }
    const isFollowed = () =>{
        try {
            const response = fetch("http://localhost:8080/Controller/controllerIsFollow.php", {
                method: 'POST',
                body: JSON.stringify([localStorage.getItem("id"), id, isFollowing]),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                //gestion de la reponse du controller
                .then(response => response.json())
                .then(data => {

                   if(data){
                    console.log("data est: "+ data);

                    setIsFollowing(true)

                   }else if (data == false){
                    console.log("data est: "+ data);

                    setIsFollowing(false);

                   }
    
                });
        } catch (error) {
            console.error("Error during fetch:", error);
        }
    }
    return (
        <div className='bg-cover bg-center h-screen w-screen dark:text-white bg-[url("../images/backlight.webp")] dark:bg-[url("../images/backdark.webp")]'>
            <h1>Page 2</h1>
            <p>Données reçues pour : {username}</p>
            <button className='bg-blue-500 dark:bg-red-500 dark:hover:bg-red-700 dark hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={handleClick}>
                {isFollowing ? "unfollow" : "follow"}
            </button>
        </div>
    );
}

export default UserPage;