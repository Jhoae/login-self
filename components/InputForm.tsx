interface IInputProps {
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  className?: string;
  id?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

export default function InputForm({
  value,
  onChange,
  name,
  className,
  id,
  placeholder,
  type = 'text',
  required = true, // 기본적으로 필수작성 요구
}: IInputProps) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      required={required}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
