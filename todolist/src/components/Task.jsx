import React from "react";
import PropTypes from "prop-types";
import { AiOutlineDelete } from 'react-icons/ai';

import '../style/task.scss';

const Task = ({ id, done, text, onChange, onDelete }) => {
  return (
    <li className={done === true ? "task-list__item task-item task-item_done" : "task-list__item task-item"}>
      <input
        className="task-item__checkbox"
        type="checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <p className={done === true ? 'task-item__text task-item__text_done': 'task-item__text'}>{text}</p>
      <button className="task-item__button" onClick={() => onDelete(id)}><AiOutlineDelete className="task-item__icon"/></button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
