import { RefObject } from 'react';

interface IEmailInputProps {
  id: string;
  name: string;
  label: string;
  ref: RefObject<HTMLInputElement | null>;
}

export default function EmailInput(props: IEmailInputProps) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={props.ref} type="email" name={props.name} id={props.id} />
    </div>
  );
}
