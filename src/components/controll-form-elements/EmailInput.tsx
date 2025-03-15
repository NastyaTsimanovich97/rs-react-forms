import { FieldError, Control, Controller } from 'react-hook-form';
import { User } from '../../schemas/user';

interface IEmailInputProps {
  id: string;
  name: 'email';
  control: Control<User>;
  label: string;
  error?: FieldError;
}

export default function EmailInputControll(props: IEmailInputProps) {
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
            type="email"
            {...field}
          />
        )}
      />
      {errorMessage && <p className="error-text">{errorMessage as string}</p>}
    </div>
  );
}
