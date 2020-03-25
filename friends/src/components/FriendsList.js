import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendEdit from './FriendEdit'
import PrivateRoute from './PrivateRoute';
import { Link } from 'react-router-dom';

const FriendsList = () => {
  const [friendsData, setFriendsData] = useState([]);  

  useEffect(() => {
    axiosWithAuth()
      .get('/api/friends')
      .then(res => {
        console.log('res', res.data);
        setFriendsData(res.data);
      })    
  }, []);

  const deleteFriend = (id, index) => {    
    axiosWithAuth()
    .delete(`/api/friends/${id}`) 
    .then(res => {
        console.log(res)
        friendsData.splice(index, 1);
        setFriendsData([...friendsData]);
    })
    .catch(err => {console.log(err)})
}

  return (
    <div className='friendslist'>
      <h2>Friends</h2>    
      
      <div className='friends'>
        {
          friendsData.map((friend, index) => (
            <>
            <FriendEdit id={friend.id}
                        name={friend.name}
                        age={friend.age}
                        email={friend.email} />
            
            <button className='deleteFriend' onClick={() => {
              deleteFriend(friend.id, index)
            }}>
            Delete Friend
            </button>
            </>
          ))}
      </div>
      <Link to='/add-friend'>
        <button>Add Friend</button>
      </Link>            
    </div>
  )
}

export default FriendsList;