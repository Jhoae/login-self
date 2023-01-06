interface IInputProps {
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
  id?: string;
}

export default function InputForm({
  value,
  onChange,
  placeholder,
  type,
  required = true, // 기본적으로 필수작성 요구
  id,
}: IInputProps) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      required={required}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
