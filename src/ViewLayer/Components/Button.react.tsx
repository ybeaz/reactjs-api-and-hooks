
import React from 'react'
import { ContextTheme, ContextThemeConsumer } from '../../DataLayer/contextTheme'

interface Props {
  handleEvents: (e: EventListener, action: any) => void,
  capture: string,
  btnIndex: number,
  contextTheme: any,
}

const defaultProps = {}

export const Button: React.SFC<Props> = (props: Props): JSX.Element => {
  const propsPrivate = { ...defaultProps, ...props }
  const contextThemeContext = React.useContext(ContextTheme)

  const handleEvents = (e: EventListener, action: any) => {
    // console.info('handleEvent', { action, contextTheme })
    contextThemeContext.handleEvents(e, action)
  }

  const { capture, contextTheme, btnIndex } = props
  const action = { type: 'changeTheme', btnIndex }
  // console.info('Button', { contextThemeContext, props })

  return <a
      href='#'
      className={`Button Button_${contextTheme}`}
      onClickCapture={e => handleEvents(e, action)}
    >{capture}
  </a>
  

}

