import { RefObject } from 'react';

interface IEmailInputProps {
  id: string;
  name: string;
  label: string;
  ref?: RefObject<HTMLInputElement | null>;
  error?: string | null;
}

export default function EmailInput(props: IEmailInputProps) {
  const errorMessage = props.error;

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className={errorMessage ? 'error-input' : ''}
        ref={props.ref}
        type="email"
        name={props.name}
        id={props.id}
      />
      {errorMessage && <p className="error-text">{errorMessage as string}</p>}
    </div>
  );
}
