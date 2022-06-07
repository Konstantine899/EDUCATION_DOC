import React, { useEffect, useState } from "react";

const Notification = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(timeout);
  }, []);
  return <div>{visible && <p>Hello</p>}</div>;
};

export default Notification;
