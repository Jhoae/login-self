import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

/* export const useInput = (initialState: string | number) => {
  const [value, setValue] = useState(initialState);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };
  return [value, onChange] as const;
}; */
const useInput = (initialValue: string | number) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue] as const;
};

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
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          <input
            id="user-email"
            type="email"
            value={email}
            required
            onChange={onChangeEmail}
            placeholder="e-mail"
          />
        </div>

        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <input
            id="user-nick"
            value={nickname}
            required
            onChange={onChangeNickname}
          />
        </div>
        <div>
          <label htmlFor="user-password">패스워드</label>
          <br />
          <input
            id="user-password"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br />
          <input
            id="user-password-check"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
        </div>
        <div></div>
        <div style={{ marginTop: '10px' }}>
          <button type="submit">가입하기</button>
        </div>
      </form>
      {passwordError ? 'error T' : 'error F'}
    </>
  );
};

export default Home;
