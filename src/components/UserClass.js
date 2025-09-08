import React, { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor: Component is being created");

    // ✅ initialize state
    this.state = {
      count: 0,
    };
  }

  // ✅ runs only once after component is mounted into the DOM
  componentDidMount() {
    console.log("componentDidMount: Component mounted");

    // Example: start an interval
    this.timer = setInterval(() => {
      console.log("Timer running... count =", this.state.count);
    }, 2000);
  }

  // ✅ runs every time the component updates (state or props change)
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(
        "componentDidUpdate: Count changed from",
        prevState.count,
        "to",
        this.state.count
      );
    }
  }

  // ✅ cleanup before component is removed from DOM
  componentWillUnmount() {
    console.log("componentWillUnmount: Component is being destroyed");

    // Clear the timer
    clearInterval(this.timer);
  }

  // ✅ method to update state
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // ✅ must return JSX
  render() {
    console.log("Render: Component rendering");
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default UserClass;
