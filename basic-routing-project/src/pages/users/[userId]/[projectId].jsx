import React from 'react'
import { useRouter } from 'next/router'

const UserProfile = () => {
  const router = useRouter();

  return (
    <div>UserID: {router.query.userId} | ProjectId: {router.query.projectId}</div>
  )
}

export default UserProfile