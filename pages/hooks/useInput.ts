import { useState, useCallback, SetStateAction, Dispatch } from 'react';

type InputReturn = readonly [
  string | number,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  Dispatch<SetStateAction<string | number>>,
];

export const useInput = (initialValue: string | number): InputReturn => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue] as const;
};
