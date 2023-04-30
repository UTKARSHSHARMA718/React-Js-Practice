import "./App.css";
import React, { useState } from "react";
import Counter from "./Counter";

// function App() {
//   const [open, setOpen] = useState(false);
//   const [count, setCounter] = useState(0);
//   const handleCount = () => {
//     setCounter(count + 1);
//   };
//   const showCounter  =()=>{
//     setOpen(~open);
//   }
//   return (
//     <div className="App">
//       <button onClick={showCounter}>Toggle Counter</button>
//       {open ? <Counter count={count} countSetter={handleCount} /> :""}
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      open: false,
    };
  }
  //!Note Error Boundaries example
  componentDidUpdate(){
    if(this.state.count < 0){
        throw new Error('Negative Values are not allowed right');
    }
  }
  render() {
    const handleCount = (type) => {
      if(type == 1)this.setState({count:this.state.count+1});
      else this.setState({count:this.state.count-1});
    };
    
    const showCounter = () => {
      this.setState({open:~this.state.open});
    };
    return (
      <>
        <button onClick={showCounter}>Toggle Counter</button>
        {this.state.open ? (
          <Counter count={this.state.count} />
        ) : (
          ""
        )}
      </>
    );
  }
}
export default App;
