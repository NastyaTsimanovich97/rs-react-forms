interface INumberInputProps {
  id: string;
  name: string;
  label: string;
}

export default function NumberInput(props: INumberInputProps) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="number" name={props.name} id={props.id} />
    </div>
  );
}
