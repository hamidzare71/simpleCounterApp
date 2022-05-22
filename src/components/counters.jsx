import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    if (this.props.counters.length === 0)
      return (
        <React.Fragment>
          <p>there is no counter</p>
        </React.Fragment>
      );

    return (
      <React.Fragment>
        <button
          className="btn btn-primary btn-sm align-self-center mx-auto"
          onClick={this.props.onReset}
        >
          Reset
        </button>

        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onReset={this.props.onReset}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
