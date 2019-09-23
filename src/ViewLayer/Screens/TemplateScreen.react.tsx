import * as React from 'react'

import * as Interfaces from '../../Shared/interfaces'
import { CommonContainer } from '../Containers/CommonContainer.react'
import { SectionWrapper } from '../Components/SectionWrapper.react'
import { Backdrop } from '../Modals/Backdrop.react'
import { TemplateModal } from '../Modals/TemplateModal.react'

interface Props {
  readonly reduxState?: any,
  readonly handleActions?: Function,
}
interface State {
}

class Template extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  constructor(props: any) {
    super(props)
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
    const { handleActions } = this.props
    let data: any
    // console.info(`ItemCard->handleEvents() type: ${action.type} [0]`, { handleActions, props: this.props, action, e })

    switch (action.type) {

      case 'getTreeData':
      {
        const action: Interfaces.Action = {
          type: 'GET_TREE_DATA',
        }
        this.props.handleActions({}, action)
      }
      break

      default: {
        console.info(`ItemCard->handleEvents unexpected action type: ${action.type}`, { action })
      }
    }
  }

  render(): JSX.Element {
    const { reduxState } = this.props
    const { treeData } = reduxState

    const display = true
    const displayClass = this.getDisplayClass(display)

    const templateModalProps: any = { }

    // console.info('ItemCard->render()', { pagination, pictureSizedProps, reduxState, props: this.props, })
    return <SectionWrapper>
      <div className={displayClass}>
        Template Structure  >>  Hello World
      </div>
      <Backdrop />
      <TemplateModal {...templateModalProps} />
    </SectionWrapper>
  }
}

export const TemplateScreen: any = CommonContainer(Template)
