import React, { useEffect, useMemo } from 'react';
import { useState } from 'react';
import PostList from './Components/postList';
import MyForm from './Components/myForm';
import PostFilter from './Components/postFilter';
import MyModal from './Components/myModal/myModal';
import MyButton from './Components/myButton';
import UserSearch from './Components/userSearch/userSearch';
import PostItem from './Components/postItem';
import GetTweet from './Components/getTweet';


const Feed2 = () => {
    const [posts, setPosts] = useState([
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);


    const sortedPosts = useMemo(() => {
        if(filter.sort) {
            return [...posts].sort((a,b)=> a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])


    const createPost =  async(newPost) => {
        setPosts([...posts, newPost])
        const response =  await fetch("http://localhost:8080/Controller/controllerPost.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
        });
        
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id != post.id))
    }

    useEffect(() => {
        const getInfo = () => {
            const currentId = localStorage.getItem('id');
            console.log(currentId);
        }
        getInfo()
    }), [];
 
    
    return (
        <div className='Feed bg-cover bg-center h-screen w-screen bg-[url("../images/backlight.webp")] dark:bg-[url("../images/backdark.webp")] pl-5'>
            
            
            <hr className='m-8' />
           <PostFilter filter={filter} setFilter={setFilter}/>
        <UserSearch />
        <GetTweet />
        </div>
    )
  }

  export default Feed2;