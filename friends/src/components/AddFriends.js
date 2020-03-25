import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriends = (props) => {
    const [addfriend, setAddfriend] = useState({
        name: '',
        age: '',
        email: ''
    });

    const handleChanges = e => {        
        setAddfriend({...addfriend,
                    [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        console.log('handle', props)
        e.preventDefault();
        axiosWithAuth()
        .post('/api/friends', addfriend)
        .then(res => {
            props.history.push('/protected')        
        })     
        .catch(err => {console.log(err)})  
      }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='name' value={addfriend.name} onChange={handleChanges} type='text' name='name'></input>
                <input placeholder='age' value={addfriend.age} onChange={handleChanges} type='text' name='age'></input>
                <input placeholder='email' value={addfriend.email} onChange={handleChanges} type='email' name='email'></input>
                <button type='submit'>Add Friend</button>
            </form>           
        </div>
    )
}

export default AddFriends