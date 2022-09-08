import React, { useState } from 'react';
import Users from '../components/Users';
import User from '../components/User';
import CreateUser from '../components/CreateUser';

export default function Dashboard() {
  const [selectedUser, setSelectedUser] = useState(1);


  return (
    <div>
      <Users setSelectedUser={setSelectedUser}/>

      <hr />

      <User selectedUser ={selectedUser}/>
      <hr />

      <CreateUser />
    </div>
  )
}
