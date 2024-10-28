import React from 'react';
import PostItem from './postItem';


  const PostList = ({posts, title, remove}) => {
    if(!posts.length){
        return (
            <div className=' dark:text-white text-center text-3xl my-8 text-blue-800 font-bold font-blod'>
                Nothing in your Feed
            </div>
        )
    }
    return (
        <div className='Feed'>
            <h1 className='text-center text-3xl my-8 text-blue-500 dark:text-white font-bold font-blod'>{title}</h1>
        <div className='grid grid-cols-1 gap-6 justify-items-center'>
        {posts.map((post, index) =>
            <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
        )}
        </div>
        </div>
    )
  }

  export default PostList;