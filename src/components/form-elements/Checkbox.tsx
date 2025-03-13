import { useState } from 'react';

interface ICheckboxProps {
  id: string;
  name: string;
  label: string;
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
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}
