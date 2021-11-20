import { useEffect, useState } from 'react';

export default function useLocalStorage(key, initValue) {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? initValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
    if (state.length === 0) {
      window.localStorage.setItem(key, JSON.stringify(initValue));
    }
  }, [initValue, key, state]);
  return [state, setState];
}
