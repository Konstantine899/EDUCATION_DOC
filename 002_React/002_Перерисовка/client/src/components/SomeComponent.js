import React from "react";

const SomeComponent = React.memo(({ increment }) => {
  console.log(`Render SomeComponent`);
  return (
    <div>
      <button onClick={increment}>INCREMENT</button>
    </div>
  );
});

export default SomeComponent;
