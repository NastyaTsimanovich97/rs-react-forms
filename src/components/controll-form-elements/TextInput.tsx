import { Control, Controller, FieldError } from 'react-hook-form';
import { User } from '../../schemas/user';

interface ITextInputProps {
  id: string;
  name: keyof User;
  label: string;
  control: Control<User>;
  error?: FieldError;
}

export default function TextInputControll(props: ITextInputProps) {
  const errorMessage = props.error?.message;

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <Controller
        name={props.name}
        control={props.control}
        render={({ field }) => (
          <input
            className={errorMessage ? 'error-input' : ''}
            type="text"
            {...field}
          />
        )}
      />
      {errorMessage && <p className="error-text">{errorMessage as string}</p>}
    </div>
  );
}
