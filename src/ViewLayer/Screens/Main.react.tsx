
import React, { useState } from 'react'

import * as Interfaces from '../../Shared/interfaces'
import { CommonContainer } from '../Containers/CommonContainer.react'
import { SectionWrapper } from '../Components/SectionWrapper.react'
import { Rectangle } from '../Components/Rectangle.react'
import { Backdrop } from '../Modals/Backdrop.react'
import { TemplateModal } from '../Modals/TemplateModal.react'
import { ContextThemeProvider } from '../../DataLayer/contextTheme'
import * as serviceFunc from '../../Shared/serviceFunc'

interface Props {
  readonly reduxState?: any,
  readonly themeSet: any,
  readonly themeList: any,
  readonly handleActions?: Function,
}

const defaultProps = {}

const Main: React.SFC<Props> = (props: Props): JSX.Element => {
  const propsPrivate = { ...defaultProps, ...props }

  const { themeSet: themeSetProps } = props

  const [ themeSet, setThemeSet ] = useState(themeSetProps);
  const [ clrIndex, setClrIndex ] = useState(0);

  const handleEvents: Function = (e: any, action: Interfaces.Action): void => {
    const { handleActions, themeList } = props
    const { btnIndex } = action

    // console.info(`Main->handleEvents() type: ${action.type} [0]`, { action, e })

    const clrIndexNext = serviceFunc.listIndexNumObj(themeList, clrIndex)
    // console.info('handleEvents->themeListIndex', { bkg: themeList[clrIndex].bkg, themeList, clrIndex, clrIndexPrev })

    switch (action.type) {

      case 'changeTheme':
      {
        themeSet[btnIndex].bdrClr = themeList[clrIndexNext].clr
        themeSet[btnIndex].btnBkg = themeList[clrIndexNext].bkg
        setThemeSet(themeSet)
        setClrIndex(clrIndexNext)

        /* Changing color from blue to red
        if (this.state.themeSet[btnIndex].btnBkg === 'blue') {
          themeSet[btnIndex].bdrClr = 'blue'
          themeSet[btnIndex].btnBkg = 'red'
          this.setState({ themeSet, toggle: !toggle })
        }
        else if (this.state.themeSet[btnIndex].btnBkg === 'red') {
          themeSet[btnIndex].bdrClr = 'red'
          themeSet[btnIndex].btnBkg = 'blue'
          this.setState({ themeSet, toggle: !toggle })
        }
        else {
          themeSet[btnIndex.bdrClr = 'red'
          themeSet[btnIndex].btnBkg = 'blue'
          this.setState({ themeSet, toggle: !toggle })
        }
        */
      }
      break

      default: {
        console.info(`Main->handleEvents unexpected action type: ${action.type}`, { action })
      }
    }

    // console.info(`Main->handleEvents() type: ${action.type} [10]`, { clrIndex, themeSet, themeList, props: this.props, state: this.state, action, e })
  }

  const handleEventsMain = { handleEvents }
  const templateModalProps: any = { }

  // console.info('Main->render()', { themeSet, props: this.props, })
  return <SectionWrapper>
    <>
      <div className='Main__capture'>Demo for react context and hooks usage</div>
      <ContextThemeProvider value={{ themeSet, ...handleEventsMain }}>
        <Rectangle />
      </ContextThemeProvider>
    </>
    <Backdrop />
    <TemplateModal {...templateModalProps} />
  </SectionWrapper>
}

export const MainScreen: any = CommonContainer(Main)
