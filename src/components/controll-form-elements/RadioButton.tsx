import { Control, Controller, FieldError } from 'react-hook-form';
import { User } from '../../schemas/user';

interface IRadioButtonOptions {
  id: string;
  label: string;
  value: string;
}

interface IRadioButtonProps {
  label: string;
  options: IRadioButtonOptions[];
  name: keyof User;
  control: Control<User>;
  error?: FieldError;
}

export default function RadioButtonControll(props: IRadioButtonProps) {
  const errorMessage = props.error?.message;

  return (
    <div>
      <label>{props.label}</label>
      <div
        className={`radio-btn-group ${errorMessage && 'radio-btn-group-error'}`}
      >
        {props.options.map((item) => (
          <div key={item.id} className="radio-btn-item">
            <Controller
              name={props.name}
              control={props.control}
              render={({ field }) => (
                <input
                  type="radio"
                  id={item.id}
                  value={item.value}
                  checked={field.value === item.value}
                  onChange={() => field.onChange(item.value)}
                />
              )}
            />
            <label htmlFor={item.id}>{item.label}</label>
          </div>
        ))}
      </div>
      {errorMessage && <p className="error-text">{errorMessage}</p>}
    </div>
  );
}
