interface ITextInputProps {
  id: string;
  name: string;
  label: string;
}

export default function TextInput(props: ITextInputProps) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="text" name={props.name} id={props.id} />
    </div>
  );
}
