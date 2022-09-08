import React from 'react'
import useCreateUser from '../query-hooks/useCreateUser'

export default function CreateUser() {
    const mutation = useCreateUser()
  return (
    <div>
        <button type="button" onClick={(() => mutation.mutate({name:"Jadi Wicky", age: 33}))}
        >Create User</button>
    </div>
  )
}
