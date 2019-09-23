
import * as React from 'react'

export const themes = {
  blue: {
    background: '#476e9e',
  },
  red: {
    background: '#e4685d',
  },
};

export const ThemeContext = React.createContext(
  themes.blue // default value
);