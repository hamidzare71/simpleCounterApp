import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 4 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; //we have to clone this
    counters[counter.id] = { ...counter };
    counters[counter.id].value += 1;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters]; //we have to clone this
    counters[counter.id] = { ...counter };
    counters[counter.id].value -= 1;
    this.setState({ counters });
  };

  handleDelete = (counterID) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterID
    );
    this.setState({ counters: counters });
    console.log(counterID, " has deleted");
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
