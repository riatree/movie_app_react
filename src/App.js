import React from "react";
// Component (상속)
class App extends React.Component{
  // isLoading state는 컴포넌트가 마운트되면 true값이여야 한다. 
  state = {
    isLoading:true,
    movie: [],
  };
  // 로딩현상 구현하기 setTimeout()
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false});
    },6000);
  }

  render() {
    // 문장 혹은 아이콘표시를 하기위해
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
