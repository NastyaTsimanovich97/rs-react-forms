import { Control, Controller, FieldError } from 'react-hook-form';
import { User } from '../../schemas/user';

interface ICheckboxProps {
  id: string;
  name: 'tc';
  control: Control<User>;
  label: string;
  error?: FieldError;
}

export default function CheckboxControll(props: ICheckboxProps) {
  const errorMessage = props.error?.message;

  return (
    <div className="checkbox-item">
      <Controller
        name={props.name}
        control={props.control}
        render={({ field }) => (
          <input
            type="checkbox"
            id={props.id}
            {...field}
            value={typeof field.value === 'string' ? field.value : ''}
          />
        )}
      />
      <label htmlFor={props.id}>{props.label}</label>
      {errorMessage && <p className="error-text">{errorMessage}</p>}
    </div>
  );
}
