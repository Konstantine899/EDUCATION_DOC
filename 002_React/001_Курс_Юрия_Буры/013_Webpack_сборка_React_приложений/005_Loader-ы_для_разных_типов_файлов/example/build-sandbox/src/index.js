//src/index.js
import Log from "./log";
import Calc from "./calc";
import img from "./react.jpg";
import PlayfairDisplay from "./PlayfairDisplay.otf";
import PlayfairDisplayVariableFont from "./PlayfairDisplay-VariableFont_wght.ttf";

const calc = new Calc();
const log = new Log();

log.log(calc.add(1, 2, 3));

const el = document.createElement("img");
el.src = img;
document.body.appendChild(el);
