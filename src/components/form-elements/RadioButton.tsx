import { useState } from 'react';

interface IRadioButtonOptions {
  id: string;
  name: string;
  label: string;
  value: string;
}

interface IRadioButtonProps {
  label: string;
  options: IRadioButtonOptions[];
  onChange: (value: string) => void;
  error: string | null;
}

export default function RadioButton(props: IRadioButtonProps) {
  const [selectedValue, setSelectedValue] = useState<string>();

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
    props.onChange(value);
  };

  return (
    <div>
      <label>{props.label}</label>
      <div
        className={`radio-btn-group ${props.error && 'radio-btn-group-error'}`}
      >
        {props.options.map((item) => {
          return (
            <div key={item.id} className="radio-btn-item">
              <input
                type="radio"
                id={item.id}
                name={item.name}
                value={item.value}
                onChange={() => handleRadioChange(item.value)}
                checked={selectedValue === item.value}
              />
              <label htmlFor={item.id}>{item.label}</label>
            </div>
          );
        })}
      </div>
      {props.error && <p className="error-text">{props.error}</p>}
    </div>
  );
}
