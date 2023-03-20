import React from 'react'


const Product = (props) => {
  return (
    <div>
      <h1>{props.pName}</h1>
      <h2>{props.pPrice}</h2>
      <p>{props.pDescription}</p>
    </div>
  )
}

export async function  getStaticProps() {
  return {
    props: {
      pName: 'system software',
      pPrice: 1000,
      pDescription: 'system software is a software that is used to manage the hardware of a computer'
    }
  }
} 

export default Product