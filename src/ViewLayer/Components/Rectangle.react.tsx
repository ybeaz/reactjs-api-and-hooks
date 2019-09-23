import * as React from 'react'
//import PropTypes from 'prop-types'
import { Button } from './Button.react'
import { ContextThemeConsumer } from '../../DataLayer/contextTheme'
import { ContextMenuConsumer } from '../../DataLayer/contextMenu'


interface Props {}

const defaultProps = {}

export const Rectangle: React.SFC<Props> = (props: Props): JSX.Element => {
  const propsPrivate = { ...defaultProps, ...props }


  const getRectangleFigures = () => {

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

  const handleEvents: Function = (e: any, action: any): void => {}

   // console.info('Rectangle->render()', { })
  const rectangleFigures = getRectangleFigures()

  return <div className='Rectangle'>
       {rectangleFigures}
   </div>
}