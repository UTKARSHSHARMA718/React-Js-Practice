import A from "./A";
import "./App.css";
import React, { useContext } from "react";

export const PowerContext = React.createContext(); // step 1 : create context
const App = () => {
  return (
    <div>
      {/* // step 2: wrap the parent component */}
      <PowerContext.Provider value={"infinity manipulation"}> 
        <A /> // parent component of component C
      </PowerContext.Provider>
    </div>
  );
};
export default App;
