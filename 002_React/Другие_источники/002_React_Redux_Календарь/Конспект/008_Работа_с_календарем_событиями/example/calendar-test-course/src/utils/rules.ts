// utils rules.ts
export const rules = {
  required: (message: string = "required field") => ({
    required: true,
    message, // ��� �� ������ �������� � �������� ����������
  }),
};
