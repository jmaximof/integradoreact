import React from "react";
import { useLocation } from "react-router-dom";



const MyComponent = () => {
    let location = useLocation();

    return (
      <>
      {location.pathname === "/" ?
      "Hi i am at the homepage"
      :
      "d-none"
      }
      </>
    );
  }
export default MyComponent