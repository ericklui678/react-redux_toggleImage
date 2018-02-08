import React, { Component } from 'react';
import { connect } from 'react-redux';

class ImageLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: '',
      toggleImg: true
    }
  }

  toggleImgOnClick() {
    let cat;
    if (this.state.toggleImg) {
      cat = this.props.cats[0].cat1;
    } else {
      cat = this.props.cats[1].cat2;
    }
    this.setState({
      imgUrl: cat,
      toggleImg: !this.state.toggleImg
    });
  }

  render() {
    return (
      <div className='border border-dark'>
        <p>ImageLoader component</p>
        <button
          onClick={() => this.toggleImgOnClick() }
          className='btn btn-primary'>Click for img
        </button>
        <img src={this.state.imgUrl}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cats: state.cats
  };
}

export default connect(mapStateToProps)(ImageLoader);
