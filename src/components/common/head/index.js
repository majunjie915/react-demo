import React from 'react';
import './index.scss';

class Head extends React.Component {
  render() {
    return (
      <h1 className="title">{this.props.title}</h1>
    );
  }
}

export default Head;