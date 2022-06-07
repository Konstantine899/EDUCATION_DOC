//index.ts
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User(); // Создаю пользователя
const company = new Company(); // Создаю компанию

const customMap = new CustomMap("map"); // создаю карту
customMap.addUserMarker(user); // Добавляю маркер на карту
customMap.addCompanyMarker(company); // Добавляю маркер компании
