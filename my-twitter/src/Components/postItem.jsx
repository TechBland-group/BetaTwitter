import React from 'react'
import MyButton from './myButton';

 const PostItem = (props) => {
 
    return (
    <div className='post text-center text-black border-2 border-red-500 w-6/12'>
        <div className='post__content'>
            <strong>{props.number}. {props.post.title}</strong>
            <div>
                {props.post.body}
            </div>
        </div>
        <div className='post__btn '>
            <MyButton onClick= {() => props.remove(props.post)}>Delete</MyButton>
        </div>
    </div>
    );
  };

  export default PostItem;
