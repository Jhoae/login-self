import { AxiosResponse } from 'axios';
import { SignUpForm, SignUpSuccess } from '../types/signUp';
import api from './api';

export const postSignUp = ({
  email,
  password,
}: SignUpForm): Promise<AxiosResponse<SignUpSuccess>> =>
  api.post('/users/create', { email, password });
