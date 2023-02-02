import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TasksList from "./TasksList";
import CreateTask from "./CreateTask";
import Footer from "./footer";
import * as taskAction from "../actions/task.actions";
import { sortedTaskListSelector } from "../selectors/task.selectors";
import * as filterAction from "../actions/filter.actions";

import '../style/todoList.scss';

class TodoList extends Component {
  componentDidMount() {
    this.props.getTasksList();
  }

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case "completed":
        return tasks.filter((task) => task.done);
        break;
      case "active":
        return tasks.filter((task) => !task.done);
        break;
      default:
        return tasks;
    }
  };

  getActiveTasksCounter = (tasks) => tasks.filter((task) => !task.done).length;

  render() {
    const { createTask, updateTask, deleteTask, changeFilter, tasks, filters } =
      this.props;
    const filteredTasks = this.filterTasks(tasks, filters);
    const taskCounter = this.getActiveTasksCounter(tasks);
    return (
      <>
        <header className="header">
          <h1 className="header__title">Todo List</h1>
        </header>
        <main className="main">
          <CreateTask onCreate={createTask} />
          <TasksList
            tasks={filteredTasks}
            handleTaskStatusChange={updateTask}
            handleTaskDelete={deleteTask}
          />
          <Footer
          className="footer"
          amount={taskCounter}
          activeFilter={filters}
          changeFilter={changeFilter}
        />
        </main>
      </>
    );
  }
}

TodoList.propTypes = {
  getTasksList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  changeFilter: PropTypes.func,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      done: PropTypes.bool,
    })
  ),
  filters: PropTypes.string,
};

const mapDispatch = {
  getTasksList: taskAction.getTasksList,
  updateTask: taskAction.updateTask,
  deleteTask: taskAction.deleteTask,
  createTask: taskAction.createTask,
  changeFilter: filterAction.changeFilter,
};

const mapState = (state) => {
  return {
    tasks: sortedTaskListSelector(state),
    filters: state.filters,
  };
};

export default connect(mapState, mapDispatch)(TodoList);
