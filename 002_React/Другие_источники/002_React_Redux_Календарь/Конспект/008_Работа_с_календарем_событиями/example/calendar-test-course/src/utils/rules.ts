// utils rules.ts
export const rules = {
  required: (message: string = "required field") => ({
    required: true,
    message, // уже не просто хардкожу а принимаю аргументом
  }),
};
