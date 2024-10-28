import React from 'react'
import MyButton from './myButton';
import MyInput from './myInput';
import PostItem from './postItem';
import PostList from './postList';
import { useState } from 'react';
import { useEffect } from 'react';

const MyForm = ({}) => {
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

                setPostList(data);
                
            });

    }
    useEffect(() => {
        showTweet();
    }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {};
    formData['body'] = event.target.elements.body.value;
    formData['user_id'] = localStorage.getItem('id');
    //console.log(formData);
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

        const getTweet = await fetch("http://localhost:8080/Controller/controllerGetTweet.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:  localStorage.getItem('id'),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            showTweet();
        });


};

    return (
      <form onSubmit={handleSubmit} className=' dark:bg-[url("../images/backdark.webp")] flex flex-col text-black border-2 border-blue-500 dark:border-red-500 mx-10 rounded-md'>
            <MyInput name="body" type="text" placeholder='Tweet something'/>
            <MyButton type="submit">Tweet!</MyButton>
      </form>
    )
  }

export default MyForm;