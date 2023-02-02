import React from "react";
import PropTypes from "prop-types";

import '../style/footer.scss';

const FILTER_BTN = [
  {
    text: "All",
    id: "all",
  },
  {
    text: "Active",
    id: "active",
  },
  {
    text: "Completed",
    id: "completed",
  },
];

const Footer = ({ amount, activeFilter, changeFilter }) => {
  return (
    <div className="info">
      <p className="info__text"><span className="info__amount">{amount}</span> active tasks</p>
      <div className="info__buttons">
        {FILTER_BTN.map(({ text, id }) => (
          <button className={activeFilter === id ? "info__button info__button_active" : "info__button"}
            onClick={() => changeFilter(id)}
            key={id}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

Footer.propTypes = {
  amount: PropTypes.number.isRequired,
  activeFilter: PropTypes.string,
  changeFilter: PropTypes.func,
};

export default Footer;
