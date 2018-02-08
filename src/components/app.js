import React, { Component } from 'react';
import ImageLoader from './image-loader';

export default class App extends Component {
  render() {
    return (
      <div className='border border-dark'>
        App component
        <ImageLoader />
      </div>
    );
  }
}
