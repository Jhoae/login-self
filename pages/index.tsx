//IPhone 14 - 6 페이지

import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import InputForm from '../components/InputForm';

export const useInput = (initialValue: string | number) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue] as const;
};

const LoginSignUp = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Home = () => {
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password],
  );

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      if (password === passwordCheck) {
        return setPasswordError(false);
      }
    },
    [email, password, passwordCheck],
  );

  return (
    <>
      <Head>
        <title>login</title>
      </Head>
      <form onSubmit={onSubmit}>
        <InputForm
          type="email"
          value={email}
          onChange={onChangeEmail}
          placeholder="email"
        />
        <br />
        <InputForm
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="password"
        />

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <Link href="/signup">
        <LoginSignUp>sign up?</LoginSignUp>
      </Link>
    </>
  );
};

export default Home;
