import { useCallback, useEffect, useState } from 'react';
import { useInput } from './index';
import styled from 'styled-components';
import { useRouter } from 'next/router';

interface Button {
  cantProgress: boolean;
}

const Button = styled.button<Button>`
  //  color: ${(props) => (props.cantProgress ? 'red' : 'blue')};
  opacity: ${(props) => (props.cantProgress ? 0.5 : 1)};
`;

const SignUp = () => {
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');

  //  const [passwordError, setPasswordError] = useState(false);

  const [cantProgress, setCantProgress] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordCheck(e.target.value);
      //    setPasswordError(e.target.value !== password);
    },
    [password],
  );

  const router = useRouter();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!cantProgress) {
      alert('회원가입 신청');
      router.push('/');
    } else {
      alert('비밀번호가 서로 다릅니다');
    }

    e.preventDefault();
    /*  if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      if (password === passwordCheck) {
        return setPasswordError(false);
      } */
  };

  useEffect(() => {
    if (!password || password !== passwordCheck) {
      setCantProgress(true);
    } else setCantProgress(false);
  }, [password, passwordCheck]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          {/* <label htmlFor="user-email">이메일</label> */}
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
          {/* <label htmlFor="user-password">패스워드</label> */}
          <br />
          <input
            id="user-password"
            value={password}
            required
            onChange={onChangePassword}
            placeholder="password"
          />
        </div>
        <div>
          {/* <label htmlFor="user-password-check">비밀번호체크</label> */}
          <br />
          <input
            id="user-password-check"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
            placeholder="password-check"
          />
        </div>
        <p>how do we call you?</p>
        <div>
          {/* <label htmlFor="user-nick">닉네임</label> */}
          <br />
          <input
            id="user-nick"
            value={nickname}
            required
            onChange={onChangeNickname}
            placeholder="nickname"
          />
        </div>
        <div>
          <Button cantProgress={cantProgress} type="submit">
            Sign up
          </Button>
        </div>
      </form>

      {!password || password !== passwordCheck
        ? '비밀번호 !== 비밀번호-check'
        : '비밀번호 === 비밀번호-check'}
      <br />
      {cantProgress ? 'cantProgress' : 'GoNext'}
    </>
  );
};

export default SignUp;
