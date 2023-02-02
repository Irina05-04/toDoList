import React, { Component } from "react";

import "../style/createTask.scss";

class CreateTask extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleTaskCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <div className="create-task">
        <input
         placeholder="creat new task"
         className="create-task__input"
         type="text"
         value={this.state.value}
         onChange={this.handleChange}
        />
        <button className="create-task__button" onClick={this.handleTaskCreate}>
          +
        </button>
      </div>
    );
  }
}

export default CreateTask;
