
import * as React from 'react'
//import PropTypes from 'prop-types'

interface Props {
}

interface State {
}

export class classTemlate extends React.Component<Props, State> {
  public static defaultProps = {
  }

  constructor(props){
    super(props)
  }

  public handleEvents: Function = (e: any, action: any): void => {}

  public render() {
    // onClickCapture={e => handleFunctions(e, action)}

    return <div>123</div>
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



