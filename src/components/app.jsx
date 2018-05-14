import React from 'react'
import CounterButton from './content-button'


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.onPlusClick = this.onPlusClick.bind(this)
    this.onMinusClick = this.onMinusClick.bind(this)
  }
  /**
   * defaultProps
   * @type {object}
   */
  static defaultProps = {
    title: 'React Counter',
    plus: '+1',
    minus: '-1'
  }

  onPlusClick() {
    this.setState({
      count: this.state.count + 1
    })
  }

  onMinusClick() {
    this.setState({
      count: this.state.count - 1
    })
  }


  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    const {
      title,
      plus,
      minus,
    } = this.props
    const count = this.state.count

    return (
      <div>
        <h1>{ title }</h1>
        <div onClick={ this.onPlusClick }>
          <CounterButton
            plusMinux={ plus }
            count={ count }
          />
        </div>
        <div onClick={ this.onMinusClick }>
          <CounterButton
            plusMinux={ minus }
            count={ count }
          />
        </div>
      </div>
    )
  }
}
