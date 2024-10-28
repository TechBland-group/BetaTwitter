import React, { useEffect, useMemo } from 'react';
import { useState } from 'react';
import PostList from './Components/postList';
import MyForm from './Components/myForm';
import PostFilter from './Components/postFilter';
import MyModal from './Components/myModal/myModal';
import MyButton from './Components/myButton';
import UserSearch from './Components/userSearch/userSearch';


const Feed = () => {
    const [posts, setPosts] = useState([
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);


    const sortedPosts = useMemo(() => {
        console.log('THis shit works')
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
        <div className='Feed dark:bg-red-950'>
            
            <div className='dark:text-white mt-10 mx-6 dark:bg-red-950'>
                <MyButton onClick={() => setModal(true)}>
                    Tweet ahead !
                </MyButton>
            </div>
            <MyModal visible={modal} setVisible={setModal}>
                <MyForm create={createPost}/>
            </MyModal>
            <hr className='m-8' />
           <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Feed'/>
        <UserSearch />
        </div>
    )
  }

  export default Feed;