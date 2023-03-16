import React from 'react'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter();

  return (
    <div>UserID: {router.query.userId}</div>
  )
}

export default Index

