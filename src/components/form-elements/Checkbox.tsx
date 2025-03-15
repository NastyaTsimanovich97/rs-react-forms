import { RefObject, useState } from 'react';

interface ICheckboxProps {
  id: string;
  name: string;
  label: string;
  ref?: RefObject<HTMLInputElement | null>;
}

export default function Checkbox(props: ICheckboxProps) {
  const [checked, setChecked] = useState(false);

  const handleChange = (isChecked: boolean) => {
    setChecked(!isChecked);
  };

  return (
    <div className="checkbox-item">
      <input
        type="checkbox"
        name={props.name}
        id={props.id}
        checked={checked}
        onChange={() => handleChange(checked)}
        ref={props.ref}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}
