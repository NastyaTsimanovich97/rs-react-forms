import { RefObject } from 'react';

interface ITextInputProps {
  id: string;
  name: string;
  label: string;
  ref: RefObject<HTMLInputElement | null>;
}

export default function TextInput(props: ITextInputProps) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={props.ref} type="text" name={props.name} id={props.id} />
    </div>
  );
}
