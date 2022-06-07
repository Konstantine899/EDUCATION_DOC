import React from "react";
import { useDispatch } from "react-redux";
import { actionResetToDefaults } from "./action-resetToDefaults";

const ResetApp = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(actionResetToDefaults())}>RESET APP</button>
  );
};

export default ResetApp;
