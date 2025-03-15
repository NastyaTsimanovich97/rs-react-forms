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
  error?: string | null;
}

export default function RadioButton(props: IRadioButtonProps) {
  const [selectedValue, setSelectedValue] = useState<string>();

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
    props.onChange(value);
  };

  const errorMessage = props.error;

  return (
    <div>
      <label>{props.label}</label>
      <div
        className={`radio-btn-group ${errorMessage && 'radio-btn-group-error'}`}
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
      {errorMessage && <p className="error-text">{errorMessage as string}</p>}
    </div>
  );
}
