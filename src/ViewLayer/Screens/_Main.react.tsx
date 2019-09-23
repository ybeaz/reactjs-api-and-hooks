import * as React from 'react'

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
interface State {
  readonly themeSet: any,
  readonly toggle: boolean,
  readonly clrIndex: number,
}

class Main extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  constructor(props: any) {
    super(props)

    // console.info('Main->constructor()', { props: this.props })

    const { themeSet } = this.props

    this.state = {
      themeSet,
      toggle: false,
      clrIndex: 0,
    }
  }

  componentDidMount(){
    const action: Interfaces.Action = {
      type: 'getTreeData',
    }
    // console.info('Analytics02->componentDidUpdate', { action })
    // Initial API call
    // this.handleEvents({}, action)
  }

  public getDisplayClass: Function = (status: boolean): string => {

    let displayClass = 'd_f'
    if (!status) {
      displayClass = 'd_n'
    }

    return displayClass
  }

  public handleEvents: Function = (e: any, action: Interfaces.Action): void => {
    const { handleActions, themeList } = this.props
    const { btnIndex } = action
    const { toggle, clrIndex: clrIndexPrev } = this.state
    let { themeSet } = this.state
    // console.info(`Main->handleEvents() type: ${action.type} [0]`, { action, e })

    const clrIndex = serviceFunc.listIndexNumObj(themeList, clrIndexPrev)
    // console.info('handleEvents->themeListIndex', { bkg: themeList[clrIndex].bkg, themeList, clrIndex, clrIndexPrev })

    switch (action.type) {

      case 'changeTheme':
      {
        themeSet[btnIndex].bdrClr = themeList[clrIndex].clr
        themeSet[btnIndex].btnBkg = themeList[clrIndex].bkg
        this.setState({ themeSet, clrIndex, toggle: !toggle })

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

  render(): JSX.Element {
    const { reduxState } = this.props
    const { treeData } = reduxState
    const { themeSet } = this.state
    const display = true
    const displayClass = this.getDisplayClass(display)

    const handleEventsMain = { handleEvents: this.handleEvents }
    const templateModalProps: any = { }

    // console.info('Main->render()', { themeSet, props: this.props, })
    return <SectionWrapper>
      <>
        <ContextThemeProvider value={{ themeSet, ...handleEventsMain }}>
          <Rectangle />
        </ContextThemeProvider>
      </>
      <Backdrop />
      <TemplateModal {...templateModalProps} />
    </SectionWrapper>
  }
}

export const MainScreen: any = CommonContainer(Main)
