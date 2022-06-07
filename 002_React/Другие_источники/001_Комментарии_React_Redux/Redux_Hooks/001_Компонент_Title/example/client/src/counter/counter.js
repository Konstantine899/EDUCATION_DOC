import React from "react";
import { connect } from "react-redux";
import Button from "@mui/material/Button";
import { increment } from "../redux/actions/increment";
import { decrement } from "../redux/actions/decrement";
import "./counter.css";

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div className="container-counter">
      <Button onClick={increment} variant="contained">
        +
      </Button>
      <p className="counter">{counter}</p>
      <Button onClick={decrement} variant="contained" color="secondary">
        -
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { counter } = state.counterReducer;
  return {
    counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: increment(dispatch),
    decrement: decrement(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
