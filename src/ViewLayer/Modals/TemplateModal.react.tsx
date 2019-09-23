import * as React from 'react'

import * as Interfaces from '../../Shared/interfaces'
import { CommonContainer } from '../Containers/CommonContainer.react'

interface Props {
  readonly sid?: string, 
  readonly capture?: string,
  readonly handleActions?: Function,
  readonly reduxState: any,
}
interface State {

}

// eslint-disable-next-line react/prefer-stateless-function
export class Template extends React.PureComponent<Props, State> {
  public static defaultProps = {
    sid: '',
    capture: '',
  }

  constructor(props: any) {
    super(props)
  }

  public getDisplayClass: Function = (status: boolean): string => {

    let displayClass = 'Modal__hide'
    if (status) {
      displayClass = 'Modal__show'
    }

    return displayClass
  }

  public render(): JSX.Element {
    const {
      reduxState, sid, capture, handleActions,
    } = this.props

    const display = false

    const modalClass = this.getDisplayClass(display)
    const action = { type: 'CLOSE_MODAL_IMG_SIZED' }

    // console.info('PictureSized [10]', { carouselProps, props: this.props })
    return (
      <div className={`Modal Modal_${sid} ${modalClass}`}>
        <div className='Modal__dialog'>
          <div className='Modal__content'>
            <div
              className='Modal__upperLeftCloseButton'
              onClickCapture={(e: React.FormEvent<HTMLDivElement>) =>
                handleActions(e, action)}
            >
              <i className='fas fa-times' />
            </div>

            {/* <!-- Modal Header --> */}
            <div className='Modal__header'>
              {/*
                <h4 className='Modal__title'>
                  {'capture'}
                </h4>
              */}
            </div>
            
            {/* <!-- Modal body --> */}
            <div className='Modal__body'>
              <div className='Modal__message'>
                22222
              </div>

            </div>

            {/* <!-- Modal footer -->
            <div className='Modal__footer'>
              <button
                type='button'
                className='Modal__footerButton'
                onClickCapture={(e: React.FormEvent<HTMLButtonElement>) =>
                  handleActions(e, action)}
              >
                Close
              </button>
            </div>
            */}
          </div>
        </div>
      </div>
    )
  }
}

export const TemplateModal: any = CommonContainer(Template)
