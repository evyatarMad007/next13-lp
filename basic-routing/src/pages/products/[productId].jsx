import React from 'react'
import { useRouter } from 'next/router'

const Product = () => {
  const router = useRouter();
  const a = 10;
  const rrr = () => {

    const request = new Promise((resolve, reject) => {});

  }
  return (
    <div>ProductID: {router.query.productId}</div>
  )
}

export default Product