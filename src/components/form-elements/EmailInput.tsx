interface IEmailInputProps {
  id: string;
  name: string;
  label: string;
}

export default function EmailInput(props: IEmailInputProps) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="email" name={props.name} id={props.id} />
    </div>
  );
}
