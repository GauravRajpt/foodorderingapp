import React from "react";
class Profileclass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("constructor");
    this.state = {
      // state variable in class based component
      count: 0,
    };
  }
  componentDidMount() {
    // console.log("componentdidmount");
    // best place to make an api call
  }

  render() {
    return (
      <>
        {/* {console.log("render")} */}
        <h1>class based profile</h1>
        <h2>name: {this.props.name}</h2>
        <h2>{this.state.count}</h2>
        {/* state update in class based component */}
        <button onClick={() => this.setState({ count: 1 })}>count</button>
      </>
    );
  }
}
export default Profileclass;
