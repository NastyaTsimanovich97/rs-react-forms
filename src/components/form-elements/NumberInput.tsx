import { RefObject } from 'react';

interface INumberInputProps {
  id: string;
  name: string;
  label: string;
  ref?: RefObject<HTMLInputElement | null>;
  error?: string | null;
}

export default function NumberInput(props: INumberInputProps) {
  const errorMessage = props.error;

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className={props.error ? 'error-input' : ''}
        ref={props.ref}
        type="number"
        name={props.name}
        id={props.id}
      />
      {errorMessage && <p className="error-text">{errorMessage as string}</p>}
    </div>
  );
}
