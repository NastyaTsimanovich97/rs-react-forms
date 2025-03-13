import { RefObject } from 'react';

interface INumberInputProps {
  id: string;
  name: string;
  label: string;
  ref: RefObject<HTMLInputElement | null>;
}

export default function NumberInput(props: INumberInputProps) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={props.ref} type="number" name={props.name} id={props.id} />
    </div>
  );
}
