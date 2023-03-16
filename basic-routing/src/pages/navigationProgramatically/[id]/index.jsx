import React from 'react'
import { useRouter } from 'next/router'

// create a random users data
const users = [
    { id: 1, name: 'Yon Tabula', age: 20, address: 'Tokyo', gender: 'male', project: 'full Stack - schedolar system' },
    { id: 2, name: 'Yossi Shalom', age: 41, address: 'israel', gender: 'male', project: 'Devops Infrastructure Big Data'  },
    { id: 3, name: 'Jon Smith', age: 67, address: 'usa', gender: 'male', project: 'Mobile Application' },
]

const index = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    router.push({
      pathname: '/users/[userId]/[projectId]',
      query: { userId: '1', projectId: 'full Stack - schedolar system' }
    });
  }
  return (
    <div>
        <h1>exmaple</h1>

        <button onClick={loadProjectHandler}>Load Project A</button>

    </div>
  )
}

export default index