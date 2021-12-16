import React from "react";
// Component (상속)
class App extends React.Component{
  constructor(props) {
    super(props);
    console.log('hello');
  }
  
  state = {
    count : 0,
  };

  add = () => {
    //console.log('add');
    this.setState(current => ({
       count : current.count + 1,
    }));
  }

  minus = () => {
    //console.log('minus');
    this.setState(current => ({
      count : current.count - 1,
   }));
  }

  componentDidMount() {
    console.log('component rendered');
  }

  componentDidUpdate() {
    console.log('I just updated');
  }

  componentWillUnmount() {
    console.log('Goodbye, cruel world');
  }

  render() {
    console.log("I'm rendered");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
      
    );
  }
}

export default App;
