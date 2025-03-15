interface ISubmitButtonProps {
  disabled?: boolean;
}

export default function SubmitButton({ disabled }: ISubmitButtonProps) {
  return (
    <input
      className="submit-btn"
      type="submit"
      value="Submit"
      disabled={disabled}
    />
  );
}
