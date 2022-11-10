import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../action';

const UserData = () => {
    const users = useSelector(state => state.users);
    console.log(users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []);


    const handleClick = () => {
        dispatch();
    }

    return (
        <div>
            {users.length ? (
                users.map(user => {
                    return (
                        <>{user.name}</>
                    )
                })
            ) : (<p>No post yet</p>)}

            <button onClick={handleClick}>Submit</button>
        </div>
    );
};

export default UserData;