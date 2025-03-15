import { FieldError, Control, Controller } from 'react-hook-form';
import { User } from '../../schemas/user';

interface IPasswordProps {
  id: string;
  label: string;
  name: keyof User;
  control: Control<User>;
  error?: FieldError;
}

export default function PasswordControll(props: IPasswordProps) {
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
            type="password"
            {...field}
          />
        )}
      />
      {errorMessage && <p className="error-text">{errorMessage as string}</p>}
    </div>
  );
}
