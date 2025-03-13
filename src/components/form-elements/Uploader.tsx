interface IUploaderProps {
  id: string;
  name: string;
  label: string;
}

export default function Uploader(props: IUploaderProps) {
  return (
    <div>
      <label htmlFor="file">{props.label}</label>
      <input type="file" name={props.name} id={props.id} />
    </div>
  );
}
