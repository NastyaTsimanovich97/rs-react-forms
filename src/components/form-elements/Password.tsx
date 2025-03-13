import { RefObject } from 'react';

interface IPasswordProps {
  id: string;
  name: string;
  label: string;
  ref: RefObject<HTMLInputElement | null>;
}

export default function Password(props: IPasswordProps) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={props.ref} type="password" name={props.name} id={props.id} />
    </div>
  );
}
