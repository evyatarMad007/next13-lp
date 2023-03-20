import React from "react";

const HomePage = (props) => {
  
  return (
    <div>
      <ul>
        {props?.products?.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>

      {/* <ul>
        {props?.data?.map((country) => {
          return <li key={country.cca3}>{country.name.common}</li>;
        })}
      </ul> */}
    </div>
  );
};

export async function getStaticProps() {
  const fs = require("fs/promises");
  const path = require("path");

  // internal file system call
  const filePath = path.join(process.cwd(), "src/data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);


  // external API call
  // const response = await fetch("https://restcountries.com/v3.1/all");
  // const countries = await response.json();

  return {
    props: {
      // countries,
      products: data.products
    },
  };
}

export default HomePage;
