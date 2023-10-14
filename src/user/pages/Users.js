import React from 'react'

import UsersList from '../components/UsersList'

export default function Users() {
  const USERS = [{
    id : 'u1',
    image : 'https://th.bing.com/th?id=OLC.R4/W7Nn805rCXg480x360&rs=1&pid=ImgDet',
    name : 'nehal',
    places : 3
  }];
  return (
    <UsersList items = {USERS}></UsersList>
  )
}
