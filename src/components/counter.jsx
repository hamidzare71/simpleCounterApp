import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  // };

  render() {
    return (
      <div className="row">
        {/* span */}
        <div className="col-1 mt-2">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>

        {/* buttons */}
        <div className="col">
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            +
          </button>

          <button
            className="btn btn-secondary btn-sm mx-2"
            onClick={() => this.props.onDecrement(this.props.counter)}
            disabled={this.props.counter.value === 0 && true}
          >
            -
          </button>

          <button
            className="btn btn-danger btn-sm m-1"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            x
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "col-md-auto badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";

    // classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;

    // const { value } = this.props.counter;
    // return value === 0 ? "Zero" : value;
  };
}

export default Counter;
