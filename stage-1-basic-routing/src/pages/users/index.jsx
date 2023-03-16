import React from 'react'
import Link from "next/link";

// create a random users data
const users = [
  { id: 1, name: 'Yon Tabula', age: 20, address: 'Tokyo', gender: 'male', project: 'full Stack - schedolar system' },
  { id: 2, name: 'Yossi Shalom', age: 41, address: 'israel', gender: 'male', project: 'Devops Infrastructure Big Data'  },
  { id: 3, name: 'Jon Smith', age: 67, address: 'usa', gender: 'male', project: 'Mobile Application' },
]

const Index = () => {
  return (
    <div>
      <h1>users Root page</h1>
      
      <ul>
        {users.map( user => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
          <br />
          <br />
          <Link href={`/users/${user.id}/${user.project}`}>{user.project}</Link>
          <br />
          <br />
          <br />
          <br />
        </li>
        ))}
      </ul>

    </div>
  )
}

export default Index