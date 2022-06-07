//src/store/action-creators/index.ts
import * as UserActionCreators from "./user";
import * as TodoActionCreators from "./todo";

/*На выходе из этого файла мы должны вернуть объект
 * который объеденяет action creators для пользователя
 * и action creators для туду
 * */

export default {
  ...UserActionCreators,
  ...TodoActionCreators,
};
