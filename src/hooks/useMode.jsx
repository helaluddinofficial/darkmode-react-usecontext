import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from './DarkModeProvider';

const useMode = () => {
  return useContext(DarkModeContext);
};

export default useMode;
