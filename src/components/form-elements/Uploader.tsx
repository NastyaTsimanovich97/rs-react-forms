import { RefObject } from 'react';
import { FieldError } from 'react-hook-form';

interface IUploaderProps {
  id: string;
  name: string;
  label: string;
  ref?: RefObject<HTMLInputElement | null>;
  handleUpload: (data: string) => void;
  error?: string | null;
}

export default function Uploader(props: IUploaderProps) {
  const handleChange = () => {
    const file = props.ref?.current?.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        props.handleUpload(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const errorMessage =
    props.error || (props.error as unknown as FieldError)?.message;

  return (
    <div>
      <label htmlFor="file">{props.label}</label>
      <input
        className={errorMessage ? 'error-input' : ''}
        ref={props.ref}
        type="file"
        name={props.name}
        id={props.id}
        onChange={handleChange}
      />
      {errorMessage && <p className="error-text">{errorMessage as string}</p>}
    </div>
  );
}
