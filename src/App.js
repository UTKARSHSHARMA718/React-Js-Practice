import A from "./A";
import "./App.css";
import React from "react";

export const PowerContext = React.createContext(); // step 1 : create context
export const MoneyContext = React.createContext();

const App = () => {
  return (
    <div>
      {/* // step 2: wrap the parent component */}
      <PowerContext.Provider value={"infinity manipulation"}>
        <MoneyContext.Provider value={'999999999999'}>
          {/* // parent component of component C */}
          <A /> 
        </MoneyContext.Provider>
      </PowerContext.Provider>
    </div>
  );
};
export default App;
