// utils rules.ts
import moment, { Moment } from "moment";

export const rules = {
  required: (message: string = "required field") => ({
    required: true,
    message, // уже не просто хардкожу а принимаю аргументом
  }),
  isDateAfter: (message: string) => () => ({
    validator(_: any, value: Moment) {
      //сравниваем дату которая пришла с DatePicker с текущей датой
      //у Moment есть ряд функций которые сравнивают дату
      if (value.isSameOrAfter(moment())) {
        return Promise.resolve();
      } else {
        return Promise.reject(new Error(message));
      }
    },
  }),
};
