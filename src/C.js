import React from "react";
import { PowerContext } from "./App"; // step 3: import the created Context
const C = () => {
  return (
    <>
      <h1>Component C</h1>
      <PowerContext.Consumer> // step 4: Create A wrapper where we want to use the context
        {(power) => { // step 5: create a function which is using the context and returning a Html Component
          return <div>{power}</div>;
        }}
      </PowerContext.Consumer>
    </>
  );
};

export default C;
