import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux'
import * as actions from '../actions'

const Counter = ({ counter, increment, decrement, random }) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button className="btn btn-primary btn-lg" onClick={decrement}>
        DECREMENT
      </button>
      <button className="btn btn-primary btn-lg" onClick={increment}>
        INCREMENT
      </button>
      <button className="btn btn-primary btn-lg" onClick={random}>
        RANDOM
      </button>
    </div>
  );
};

//Читаю из state
const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};


export default connect(mapStateToProps, actions)(Counter);
