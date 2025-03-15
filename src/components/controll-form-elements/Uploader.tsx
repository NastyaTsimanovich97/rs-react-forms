import { FieldError, Control, Controller } from 'react-hook-form';
import { User } from '../../schemas/user';

interface IUploaderProps {
  id: string;
  name: keyof User;
  label: string;
  control: Control<User>;
  error?: FieldError;
}

export default function UploaderControll(props: IUploaderProps) {
  const handleChange =
    (onChange: (value: string | null) => void) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result as string;
          onChange(base64String);
        };
        reader.readAsDataURL(file);
      } else {
        onChange(null);
      }
    };

  const errorMessage = props.error?.message;

  return (
    <div>
      <label htmlFor="file">{props.label}</label>
      <Controller
        name={props.name}
        control={props.control}
        render={({ field }) => (
          <input
            className={errorMessage ? 'error-input' : ''}
            type="file"
            accept="image/*"
            onChange={handleChange(field.onChange)}
          />
        )}
      />
      {errorMessage && <p className="error-text">{errorMessage as string}</p>}
    </div>
  );
}
