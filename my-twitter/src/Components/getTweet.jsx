import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import MyButton from "./myButton";
import MyInput from "./myInput";
function GetTweet() {


    const [postList, setPostList] = useState([]);
    
    const showTweet = async (event) => {
        await fetch("http://localhost:8080/Controller/controllerGetTweet.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: localStorage.getItem('id'),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPostList([]);
                setPostList(data);

            });

    }
    useEffect(() => {
        showTweet();
    }, [])
    const retweet = async (idDuPost, userConnected) => {
        console.log(idDuPost, userConnected);
        await fetch("http://localhost:8080/Controller/controllerRetweet.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([userConnected, idDuPost]),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                showTweet();
            });

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {};
        formData['body'] = event.target.elements.body.value;
        formData['user_id'] = localStorage.getItem('id');
        const response = await fetch("http://localhost:8080/Controller/controllerPost.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });

        await fetch("http://localhost:8080/Controller/controllerGetTweet.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: localStorage.getItem('id'),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                showTweet();
            });


    }
  
    return (

        <ul className="List-Tweet grid justify-items-center gap-y-4">
            <form onSubmit={handleSubmit} className='mt-10 w-[750px] dark:bg-[url("../images/backdark.webp")] flex flex-col text-black border-2 border-blue-500 dark:border-red-500 mx-10 rounded-md'>
                <MyInput name="body" type="text" placeholder='Tweet something' />
                <MyButton type="submit">Tweet!</MyButton>
            </form>
            {
                postList.map(post => (
                    <li className='w-[450px] border rounded-lg bg-blue-400 dark:bg-red-400' key={uuidv4()}>
                        <div className="Tweet-Container">
                            <Link to={`/profil/userPage/${post.username}/${post.user_id}`} className="text-blue-800 dark:text-red-800 dark:hover:text-white hover:text-white px-4">{post.username}</Link>
                            <p className="px-2 dark:text-white">{post.body}</p>
                            <MyButton onClick={() => retweet(post.id, localStorage.getItem("id"))}><img src="../../images/retweeter.png" className="retweet-icon w-5" alt="retweet button" /></MyButton>
                            <Link to={`/tweetAndComment/${post.id}`} className="text-blue-800 dark:text-red-800 dark:hover:text-white hover:text-white px-4">  
                            {<MyButton><img src="../../images/comment.png" className="retweet-icon w-5" alt="comment button" /></MyButton>}
                            
                               </Link>

                        </div>
                    </li>))
            }
        </ul>
    )
}
export default GetTweet;