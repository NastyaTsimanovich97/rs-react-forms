import { RefObject } from 'react';

interface IUploaderProps {
  id: string;
  name: string;
  label: string;
  ref: RefObject<HTMLInputElement | null>;
  handleUpload: (data: string) => void;
  error: string | null;
}

export default function Uploader(props: IUploaderProps) {
  const handleChange = () => {
    const file = props.ref.current?.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        props.handleUpload(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label htmlFor="file">{props.label}</label>
      <input
        className={props.error ? 'error-input' : ''}
        ref={props.ref}
        type="file"
        name={props.name}
        id={props.id}
        onChange={handleChange}
      />
      {props.error && <p className="error-text">{props.error}</p>}
    </div>
  );
}
