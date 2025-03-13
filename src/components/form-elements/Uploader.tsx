import { RefObject } from 'react';

interface IUploaderProps {
  id: string;
  name: string;
  label: string;
  ref: RefObject<HTMLInputElement | null>;
  handleUpload: (data: string) => void;
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
        ref={props.ref}
        type="file"
        name={props.name}
        id={props.id}
        onChange={handleChange}
      />
    </div>
  );
}
