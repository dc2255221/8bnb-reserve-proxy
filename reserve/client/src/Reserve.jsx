/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import PriceHeader from './PriceHeader.jsx';
import BookForm from './BookForm.jsx';
import styles from './Reserve.module.css';

class Reserve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spaceId: this.props.spaceId,
      nightlyRate: 200,
    };
  }

  // componentDidMount() {
  // }

  render() {
    return (
      <div className={styles.wrapper}>
        <PriceHeader nightlyRate={this.state.nightlyRate} />
        <BookForm />
      </div>
    );
  }
}

export default Reserve;
