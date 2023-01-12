import { StringType } from '../hooks/common/useForm';

export default function validate(values: StringType): StringType {
  const errors: StringType = {};

  if (!values.email) {
    errors.email = '이메일이 입력되지 않앗습니다.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '입력된 이메일이 유효하지 않습니다.';
  }

  if (!values.password) {
    errors.password = '비밀번호가 입력되지 않았습니다.';
  } else if (values.password.length < 4) {
    errors.password = '4자 이상의 패스워드를 사용해야 합니다.';
  }

  if (Object.keys(values).length > 2 && !values.nickname) {
    errors.nickname = '닉네임이 입력되지 않았습니다.';
  } else if (Object.keys(values).length > 2 && values.nickname === 'Jho') {
    errors.nickname = 'Jho는 중복된 닉네임입니다.';
  }

  if (Object.keys(values).length > 2 && !values.passwordCheck) {
    errors.passwordCheck = '비밀번호 확인이 입력되지 않았습니다.';
  } else if (
    Object.keys(values).length > 2 &&
    values.password !== values.passwordCheck
  ) {
    errors.passwordCheck = '비밀번호가 일치하지 않습니다.';
  }
  console.log('errors', errors);

  return errors;
}
