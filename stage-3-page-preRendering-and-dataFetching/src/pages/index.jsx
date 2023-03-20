import React from "react";

const HomePage = (props) => {
  console.log(props);
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>

      <ul>
        {props.data.map((country) => {
          return <li key={country.cca3}>{country.name.common}</li>;
        })}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  // fetch this https://restcountries.com/v3.1/all

  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();

  return {
    props: {
      data: data,
      products: [
        {
          id: "p1",
          title: "First Product",
          description: "This is the first product",
        },
        {
          id: "p2",
          title: "Second Product",
          description: "This is the second product",
        },
        {
          id: "p3",
          title: "Third Product",
          description: "This is the third product",
        },
      ],
    },
  };
}

export default HomePage;
