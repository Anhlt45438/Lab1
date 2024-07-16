import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();
export const Theme = ({ children }) => {
  const [theme, setTheme] = useState('Sáng');
  const toggleTheme = () => {
    setTheme(theme === 'Sáng' ? 'Tối' : 'Sáng');
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);