//index.ts
import { User } from "./User";
// import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User(); // Создаю пользователя

const customMap = new CustomMap("map"); // создаю карту
customMap.addUserMarker(user); // Добавляю маркер на карту
