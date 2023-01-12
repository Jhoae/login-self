//IPhone 14 - 7 페이지

import { useCallback, useEffect, useState } from 'react';
import { useInput } from '../../../hooks/useInput';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import InputForm from '../InputForm';

type Button = {
  cantProgress: boolean;
};

const Button = styled.button<Button>`
  opacity: ${(props) => (props.cantProgress ? 0.5 : 1)};
  color: ${(props) => (props.cantProgress ? 'red' : 'blue')};
`;

const SignUp = () => {
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [everyFull, setEveryFull] = useState(false);

  useEffect(() => {
    if (email && nickname && password && passwordCheck) {
      setEveryFull(true);
    } else {
      setEveryFull(false);
    }
  }, [email, nickname, password, passwordCheck]);

  //  const [passwordError, setPasswordError] = useState(false);

  const [cantProgress, setCantProgress] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordCheck(e.target.value);
      //    setPasswordError(e.target.value !== password);
    },
    [password],
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const router = useRouter();
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
      <Link href="/">
        <button>개발용 - 홈버튼</button>
      </Link>
      <form onSubmit={onSubmit}>
        <InputForm
          value={email}
          onChange={onChangeEmail}
          name="email"
          placeholder="e-mail"
          type="email"
        />
        <br />
        <InputForm
          value={password}
          onChange={onChangePassword}
          name="password"
          placeholder="password"
          type="password"
        />
        <br />
        <InputForm
          value={passwordCheck}
          onChange={onChangePasswordCheck}
          name="password-check"
          placeholder="password-check"
          type="password"
        />

        <p>how do we call you?</p>
        <InputForm
          value={nickname}
          onChange={onChangeNickname}
          name="nickname"
          placeholder="nickname"
          type="text"
        />
        <div>
          <Button cantProgress={cantProgress || !everyFull} type="submit">
            Sign up
          </Button>
        </div>
      </form>
      {/* */}
      {/* */}
      {/*아래는 개발할때 보기좋게 작성한 주석코드 */}
      {everyFull ? <p>빈칸 없음</p> : <strong>빈칸있음</strong>} &{' '}
      {cantProgress ? (
        <strong>'비밀번호 서로 다름'</strong>
      ) : (
        <p>'비밀번호 체크 완료'</p>
      )}
      =&gt;
      {everyFull && !cantProgress ? <p>가입 활성화</p> : <p>가입 비활성화</p>}
    </>
  );
};

export default SignUp;
