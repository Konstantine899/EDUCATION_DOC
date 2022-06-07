//src/components/hoc-helpers/compose.js
const compose =
  (...funcs) =>
  (component) => {
    return funcs.reduceRight((prevResult, f) => {
      return f(prevResult);
    }, component);
  };

// const compose = (...funcs) => (comp) => {
//     return funcs.reduceRight(
//         (wrapped, f) => f(wrapped), comp);
// };

export default compose;
