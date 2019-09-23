import React from 'react'

interface ContextThemeInterface {
  themeSet: any,
  handleEvents: Function,
}

export const ContextTheme = React.createContext<ContextThemeInterface | null>(null)
export const ContextThemeProvider = ContextTheme.Provider
export const ContextThemeConsumer = ContextTheme.Consumer
