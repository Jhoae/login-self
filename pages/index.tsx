//IPhone 14 - 6 페이지

import React, { useCallback } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import InputForm from '../components/InputForm';
import { useInput } from './hooks/useInput';

const LoginSignUp = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Home = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onLogin = useCallback(() => {
    console.log('로그인');
  }, [email, password]);

  return (
    <>
      <Head>
        <title>login</title>
      </Head>
      <form onSubmit={onLogin}>
        <InputForm
          type="email"
          name="email"
          value={email}
          onChange={onChangeEmail}
          placeholder="email"
        />
        <br />
        <InputForm
          type="password"
          name="password"
          value={password}
          onChange={onChangePassword}
          placeholder="password"
        />

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <Link href="/signupup">
        <LoginSignUp>sign up?</LoginSignUp>
      </Link>
    </>
  );
};

export default Home;
