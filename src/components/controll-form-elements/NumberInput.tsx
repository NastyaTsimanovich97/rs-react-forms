import { Controller, FieldError, Control } from 'react-hook-form';
import { User } from '../../schemas/user';

interface INumberInputProps {
  id: string;
  label: string;
  name: 'age';
  control: Control<User>;
  error?: FieldError;
}

export default function NumberInputControll(props: INumberInputProps) {
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
            type="number"
            {...field}
          />
        )}
      />
      {errorMessage && <p className="error-text">{errorMessage as string}</p>}
    </div>
  );
}
