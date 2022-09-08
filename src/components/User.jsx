import React from 'react';
import useUser from '../query-hooks/useUser';

export default function User({ selectedUser }) {
    const user = useUser(selectedUser);
  return (
    <div>
        {user.isLoading && <p>Loading User...</p>}    


        {user.isSuccess && (
        <p>{`${user.data.name} - ${user.data.address.street}`}</p>)}
    </div>
  )
}
