import { useState, useEffect } from 'react';

export const useLS = (light) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') ?? light);
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);
  return [theme, setTheme];
};
