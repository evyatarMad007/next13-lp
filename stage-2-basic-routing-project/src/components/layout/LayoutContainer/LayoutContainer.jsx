import React from "react";
import MainHeader from "../MainHeader/MainHeader";

const LayoutContainer = (props) => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default LayoutContainer;
