
import * as React from 'react'
//import PropTypes from 'prop-types'
import { Button } from './Button.react'
import { ContextThemeConsumer } from '../../DataLayer/contextTheme'
import { ContextMenuConsumer } from '../../DataLayer/contextMenu'

interface Props {
}

interface State {
}

export class Rectangle extends React.Component<Props, State> {
  public static defaultProps = {
  }

  constructor(props){
    super(props)
  }

  public getRectangleFigures = () => {

    let arr = new Array(3).fill(null)
    arr = arr.map((item: any, i: number) => {
      // console.info('getRectangleFigures [2]', { i })
      return <ContextMenuConsumer>
        {contextMenu =>
          <ContextThemeConsumer>
            {contextTheme => (contextTheme && (
              <div className={`Rectangle__figure Rectangle__figure_ext Rectangle__figure_${contextTheme.themeSet[i].bdrClr}`}>
                <Button 
                  capture={contextMenu.menu[i].capture}
                  btnIndex={contextMenu.menu[i].index}
                  contextTheme={contextTheme.themeSet[i].btnBkg} 
                />
              </div>
            ))}
          </ContextThemeConsumer>
        }
      </ContextMenuConsumer>
    })

    // console.info('getRectangleFigures [10]', { arr })
    
    return arr
  }

  public handleEvents: Function = (e: any, action: any): void => {}

  public render() {

    // console.info('Rectangle->render()', { })
    const rectangleFigures = this.getRectangleFigures()

    return <div className='Rectangle'>
        {rectangleFigures}
    </div>
  }
}


// classTemlate.defaultProps = { key: value }

// classTemlate.propTypes = {}
  // PropTypes.bool.isRequired
  // PropTypes.string
  // PropTypes.number
  // PropTypes.array
  // PropTypes.object
  // PropTypes.node
  // PropTypes.func
  // PropTypes.instanceOf(RegExp)]
  // PropTypes.shape({ })
  // PropTypes.oneOfType([ ])



