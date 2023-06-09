import { isAdmin } from "@/guards/isAdmin";
import React from "react";

const HomePage = (props) => {
  const { products } = props;
  return (
    <div>
      <ul>
        {products?.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
};

export const getStaticProps = async (context) => {
  console.log("Generating Static Props");
  const fs = require("fs/promises");
  const path = require("path");

  // internal file system call
  const filePath = path.join(process.cwd(), "src/data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const userData = {
    isAdmin: true,
  }

  isAdmin(userData, '/products');


  return {
    props: {
      products: data.products
    },
    revalidate: 10, // thats mean the function getStaticProps() will be called every 10 seconds, but only its the user refresh the page he can see the changes, and if he doesn't refresh the page he will see the old data if he visit the page again after 10 seconds
    // notFound: true, // if true, it will return 404 page
  };
}


export default HomePage;