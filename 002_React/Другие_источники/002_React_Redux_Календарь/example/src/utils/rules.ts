// utils rules.ts
import moment, { Moment } from "moment";

export const rules = {
  required: (message: string = "required field") => ({
    required: true,
    message, // ��� �� ������ �������� � �������� ����������
  }),
  isDateAfter: (message: string) => () => ({
    validator(_: any, value: Moment) {
      //���������� ���� ������� ������ � DatePicker � ������� �����
      //� Moment ���� ��� ������� ������� ���������� ����
      if (value.isSameOrAfter(moment())) {
        return Promise.resolve();
      } else {
        return Promise.reject(new Error(message));
      }
    },
  }),
};
