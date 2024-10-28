import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyButton from './Components/myButton';
import { v4 as uuidv4 } from 'uuid';
import MyInput from './Components/myInput';
function Comment() {
    const [tweetData, setTweetData] = useState(null);
    const [tweetComment, setTweetComment] = useState(null);
    const idPost = useParams();
    console.log(idPost.id);
    const requete = async () => {

        await fetch("http://localhost:8080/Controller/controllerComment.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: idPost.id,
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setTweetData(data);
            });
    }
    useEffect(() => {
        requete();
        getResponse();
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const text = e.target.elements.body.value;
        const idOrigine = idPost.id;
        console.log(idOrigine);
        const paquet = [idOrigine, localStorage.getItem('id'), text]
        const infoComment = [];
        await fetch("http://localhost:8080/Controller/controllerPostComment.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paquet)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setTweetComment(data)

            });
        console.log(getResponse());
    }

    //fetch de recup des reponses
    const getResponse = async () => {
        await fetch('http://localhost:8080/Controller/controllerGetComments.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(idPost.id)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setTweetComment(data);
            });
    }


    return (

        tweetData && (
            <div className='comment-container'>

                {tweetData.map(post => (

                    <li key={uuidv4} className='border rounded-lg bg-blue-400 dark:bg-red-400 max-w-40'>
                        <div className="Tweet-Container max-w">
                            <Link to={`/profil/userPage/${post.username}/${post.user_id}`} className="text-blue-800 dark:text-red-800 dark:hover:text-white hover:text-white px-4">{post.username}</Link>
                            <p className="px-2 dark:text-white">{post.body}</p>
                            <MyButton><img src="../../images/retweeter.png" className="retweet-icon w-5" alt="retweet button" /></MyButton>
                            <Link to={`/tweetAndComment/${post.id}`} className="text-blue-800 dark:text-red-800 dark:hover:text-white hover:text-white px-4">
                                <MyButton><img src="../../images/comment.png" className="retweet-icon w-5" alt="comment button" /></MyButton>
                            </Link>
                        </div>
                    </li>

                ))}
                <form onSubmit={handleSubmit}>
                    <MyInput name="body" />
                    <MyButton type="submit">tweet</MyButton>
                </form>
                {tweetComment &&(
                    tweetComment.map( comm => (
                        <li key={uuidv4} className='border rounded-lg bg-blue-400 dark:bg-red-400 max-w-40'>
                        <div className="Tweet-Container max-w">
                            <Link to={`/profil/userPage/${comm.username}/${comm.user_id}`} className="text-blue-800 dark:text-red-800 dark:hover:text-white hover:text-white px-4">{comm.username}</Link>
                            <p className="px-2 dark:text-white">{comm.body}</p>
                            <Link to={`/tweetAndComment/${comm.id}`} className="text-blue-800 dark:text-red-800 dark:hover:text-white hover:text-white px-4">
                                <MyButton><img src="../../images/comment.png" className="retweet-icon w-5" alt="comment button" /></MyButton>
                            </Link>
                        </div>
                    </li> 
                    ))
                    )}
            </div>
        )
    )
}



export default Comment;