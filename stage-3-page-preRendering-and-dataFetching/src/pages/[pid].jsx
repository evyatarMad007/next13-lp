import React from 'react'

function Product(props)  {
  const { product } = props;
  
  // if fallback is set to true, we need to check if the product is loaded because it will be generated on the run time (client side)
  // if fallback is set to false, we don't need to check if the product is loaded because it will be generated on the build time
  // if fallback is set to blocking, we don't need to check if the product is loaded because it will wait for the product to be loaded
  if(!product) {
    return <p>Loading...</p>
}

  return (
    <div>
        <p>{product.title}</p>
        <p>{product.description}</p>
    </div>
  )
}

const fetchCountries = async () => {
    const getCountries = await fetch("https://restcountries.com/v3.1/all");
    const countries = await getCountries.json();
    return countries;
}

export async function getStaticPaths(context) {

    const countries = await fetchCountries();
    const paths = countries.map((country, index) => ({
        params: { pid: country.cca3 },
    }));
    
    return {
        paths: paths,
        // paths: [
        //     { params: { pid: "p1" } },
        // ],
        fallback: 'blocking' // true: if the path is not found, it will be generated on the run time (client side)
        // fallback: true, // true: if the path is not found, it will be generated on the run time (client side)
    }
}

export async function getStaticProps(context) {
    // extract the params from the context (in the server)
    const { params } = context
    const { pid } = params
    const fs = require("fs/promises");
    const path = require("path");

    // internal file system call
    const filePath = path.join(process.cwd(), "src/data", "dummy-backend.json");
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
    
    return {
        props: {
        product: data.products.find((product) => product.id === pid),
        }
    }
}

export default Product