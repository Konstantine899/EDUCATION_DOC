//src/actions.js

// Action Creators

//action creator increment
export const increment = () => {
  return { type: "INCREMENT" };
};

//action creator decrement
export const decrement = () => {
  return { type: "DECREMENT" };
};

//action creator random
export const random = () => {
  return { type: "RANDOM", payload:Math.floor(Math.random()* 10) };
};
