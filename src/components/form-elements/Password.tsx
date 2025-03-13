interface IPasswordProps {
  id: string;
  name: string;
  label: string;
}

export default function Password(props: IPasswordProps) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="password" name={props.name} id={props.id} />
    </div>
  );
}
