import React, { useEffect, useState } from 'react';

export interface StringType {
  [key: string]: string;
}

interface IFormProps {
  initialValues: StringType;
  onSubmit: (value: StringType) => void;
  validate: (value: StringType) => StringType;
}

interface IFormReturns {
  values: StringType;
  errors: StringType;
  submitting: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

function useForm({
  initialValues,
  onSubmit,
  validate,
}: IFormProps): IFormReturns {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // name = email 또는 password 등등
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setSubmitting(true);
    event.preventDefault();
    await new Promise(() =>
      setTimeout(() => console.log('서버에 데이터 전송 시도'), 1000),
    );

    // Promise 대신, 서버에 전송하는 코드 필요 : axios.post(values ...)
  };

  useEffect(() => {
    setErrors(validate(values)); // input value의 타당성 검증 코드 필요
  }, [values]);

  useEffect(() => {
    if (submitting) {
      if (Object.keys(errors).length === 0) {
        console.log('에러없음. submit 성공');
        onSubmit(values);
      } else {
        console.log('에러 발견');
        alert(JSON.stringify(errors));
      }
      setSubmitting(false);
    }
  }, [submitting, errors]);

  return {
    values,
    errors,
    submitting,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
