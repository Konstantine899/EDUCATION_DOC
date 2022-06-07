import React, { useEffect } from "react";

const HookCounter = ({ value }) => {
  useEffect(() => {
    console.log(`useEffect()`);
    return () => console.log(`clear`);
  }, [value]);

  return <div>{value}</div>;
};

export default HookCounter;
