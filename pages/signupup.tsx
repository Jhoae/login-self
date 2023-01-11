import React, { useEffect, useState } from 'react';
import useForm from './hooks/useForm';
import validate from '../components/validate';
import { StringType } from './hooks/useForm';
import Link from 'next/link';
import InputForm from '../components/InputForm';
import styled from 'styled-components';

const Button = styled.button`
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  color: ${(props) => (props.disabled ? 'red' : 'blue')};
`;

function onSubmitFn(values: StringType): void {
  alert(JSON.stringify(values, null, 2));
}

function LoginForm() {
  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: '',
      password: '',
      passwordCheck: '',
      nickname: '',
    },
    onSubmit: onSubmitFn,
    validate,
  });

  return (
    <>
      <Link href="/">
        <button>개발용 - 홈버튼</button>
      </Link>
      <form onSubmit={handleSubmit} noValidate>
        <InputForm
          type="email"
          name="email"
          placeholder="email"
          value={values.email}
          onChange={handleChange}
          className={errors.email && 'errorInput'}
        />
        {errors.email && <span className="errorMessage">{errors.email}</span>}
        <br />
        <InputForm
          type="password"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
          className={errors.password && 'errorInput'}
        />
        {errors.password && (
          <span className="errorMessage">{errors.password}</span>
        )}
        <br />
        <InputForm
          type="password"
          name="passwordCheck"
          placeholder="password-check"
          value={values.passwordCheck}
          onChange={handleChange}
          className={errors.passwordCheck && 'errorInput'}
        />
        {errors.passwordCheck && (
          <span className="errorMessage">{errors.passwordCheck}</span>
        )}
        <br />
        <p>how do we call you?</p>

        <InputForm
          type="text"
          name="nickname"
          placeholder="nickname"
          value={values.nickname}
          onChange={handleChange}
          className={errors.nickname && 'errorInput'}
        />
        {errors.nickname && (
          <span className="errorMessage">{errors.nickname}</span>
        )}

        <br />

        <Button type="submit" disabled={Object.keys(errors).length !== 0}>
          새거
        </Button>
      </form>
    </>
  );
}

export default LoginForm;
