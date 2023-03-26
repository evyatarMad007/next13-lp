import React from 'react'
import { useSWR } from 'swr';
const sales = () => {

    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos/1');
    // the data will be fetched on the client side.
    // and if the data will changed in the server, the data will be updated on the client side
    
  return (
    <div>sales</div>
  )
}

export default sales