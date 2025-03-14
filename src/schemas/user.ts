import { object, string, number, mixed, ref } from 'yup';

export const userSchema = object({
  name: string().required(),
  age: number().required().positive().integer().min(0).max(150),
  email: string().email().required(),
  password: string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
      'password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
    )
    .required(),
  repeatPassword: string()
    .required()
    .oneOf([ref('password')], 'passwords must match'),
  gender: mixed().required().oneOf(['male', 'female', 'other']),
  file: mixed()
    .required()
    .test('fileSize', 'file size is too large (max 2MB)', (value) => {
      const base64Data = (value as string).split(',')[1];
      const decodedData = atob(base64Data);

      const sizeInBytes =
        decodedData.length * (3 / 4) -
        (base64Data.endsWith('==') ? 2 : base64Data.endsWith('=') ? 1 : 0);
      return sizeInBytes <= 2 * 1024 * 1024;
    })
    .test(
      'fileFormat',
      'unsupported format. Only .png and .jpeg are allowed',
      (value) => {
        if (!value) return false;

        const regex = /^data:image\/(jpeg|png);base64,/;
        return regex.test(value as string);
      }
    ),
});
