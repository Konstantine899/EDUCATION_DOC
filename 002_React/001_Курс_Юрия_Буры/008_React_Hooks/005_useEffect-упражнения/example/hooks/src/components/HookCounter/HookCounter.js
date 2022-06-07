import React, { useEffect } from "react";

const HookCounter = ({ value }) => {
  //аналог componentDidMount
  useEffect(() => {
    //аналог componentDidMount
    console.log(`mount`);
    //аналог componentWillUnmount
    return () => console.log(`unmount`);
  }, []);

  //аналог componentDidUpdate
  useEffect(() => console.log(`update`));

  return <div>{value}</div>;
};

export default HookCounter;
