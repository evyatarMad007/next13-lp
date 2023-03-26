import React, { useEffect } from 'react'

const userProfile = (props) => {
  const { firstName, lastName } = props

  return (
    <div>
      <h1>hello: {firstName} {lastName}</h1>
    
      <ul>
        {/* {
          props.countries.map((country) => {
            return <li key={country.region}>{country.region}</li>
          })
        } */}
      </ul>
    </div>
  )
}

export default userProfile

// getServerSideProps say next.js will call this function on every request on this page and the page will be re-generated on every request 
export const getServerSideProps = async (context) => {
  const { params, req, res } = context;
  console.log(req);
  // fetch countries 
  // const response = await fetch('https://restcountries.com/v3.1/all');
  // const countries = await response.json();

  return {
    props: {
      firstName: 'Evyatar',
      lastName: 'Madari',
      // countries,
    }
  }
}