/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import PropTypes from 'prop-types';
import { getDate } from 'date-fns';
import styles from './Cell.module.css';

class Cell extends React.Component {
  constructor (props) {
    super(props);
    const { date } = this.props;
    const { dateNum, weekNum, render } = date;

    this.state = {
      dateNum,
      weekNum,
      render,
    };
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
  }

  handleOnMouseEnter () {

  }

  handleOnMouseLeave () {

  }

  render () {
    const { date } = this.props;
    const { dateNum } = date;
    return (
      <td
        className={styles.cell}
        aria-disabled="true"
        tabIndex="-1"
        role="button"
      >
        {dateNum}
      </td>
    );
  }
}

Cell.propTypes = {
  date: PropTypes.object,
};

Cell.defaultProps = {
  date: {},
};

export default Cell;
