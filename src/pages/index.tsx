//IPhone 14 - 6 페이지

import React, { useCallback } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import InputForm from '../components/atoms/InputForm';
import validate from '../utils/validate';
import useForm from '../hooks/common/useForm';
import { Button } from '../pages/auth/Newsignup';

const LoginSignUp = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Home = () => {
  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {},
    validate,
  });

  const onLogin = useCallback(() => {
    console.log('로그인');
  }, [values.email, values.password]);

  return (
    <>
      <Head>
        <title>login</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <InputForm
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="email"
        />
        <br />
        <InputForm
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="password"
        />

        <div>
          <Button
            type="submit"
            // disabled={Object.keys(errors).length !== 0}
          >
            Login
          </Button>
        </div>
      </form>
      <Link href="auth/Newsignup">
        <LoginSignUp>sign up?</LoginSignUp>
      </Link>

      {errors.email && <span className="errorMessage">{errors.email}</span>}
      <br />
      {errors.password && (
        <span className="errorMessage">{errors.password}</span>
      )}
    </>
  );
};

export default Home;
