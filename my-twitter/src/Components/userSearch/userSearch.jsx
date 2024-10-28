import React, { useState } from 'react';
import MyInput from "../myInput";
import { Link } from 'react-router-dom';
import Profil from './profil/userPage';
import {v4 as uuidv4} from 'uuid';
function UserSearch() {
    const [userList, setUserList] = useState([]);
 
    const searchUser = async (e) => {
        const inputValue = e.target.value.trim();

        if (inputValue === '') {
            setUserList([]);
            return;
        }
 
        try {
            const response = await fetch("http://localhost:8080/Controller/controllerSearchUser.php", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputValue)
            });
            const data = await response.json();
            console.log(data);

            setUserList(data);
        } catch (error) {
            console.log(error);
        }
    }
 
 
    return (
        <div id="UserSearch" className="w-fit">
            <MyInput onChange={searchUser} autoComplete="off" />
            <ul>
                {   
                    userList.map(user => (
                    <li className='border rounded-lg bg-blue-400 dark:bg-red-400' key={uuidv4()}>
                    <Link to={ `/profil/userPage/${user.username}/${user.id }`}>{user.username}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default UserSearch;