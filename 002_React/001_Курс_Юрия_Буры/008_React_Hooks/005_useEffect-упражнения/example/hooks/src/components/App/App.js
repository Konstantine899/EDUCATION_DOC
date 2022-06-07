import React, { useState } from "react";
import ClassCounter from "../ClassCounter/ClassCounter";
import HookCounter from "../HookCounter/HookCounter";
import Notification from "../Notification/Notification";

const App = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button onClick={() => setValue((value) => value + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>
        <HookCounter value={value} />
        <Notification />
      </div>
    );
  } else {
    return <button onClick={() => setVisible(true)}>show</button>;
  }
};

export default App;
