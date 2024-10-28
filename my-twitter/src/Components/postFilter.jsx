import React from 'react'
import MyInput from './myInput';
import MySelect from './mySelect';

const PostFilter = ({filter, setFilter}) => {

    return (
        <div>
            <MyInput value={filter.query} onChange={e => setFilter({...filter,query: e.target.value})} placeholder="Search..."/>
            <MySelect value={filter.sort} onChange={selectedSort => setFilter({...filter, sort: selectedSort})} defeaultValue='Select' options={[
                {value: 'title', name :'Select by Title'},
                {value: 'body', name :'Select by Body'},
            ]}/>
        </div>
    )
  }

export default PostFilter;
