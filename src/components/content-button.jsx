import React from 'react'
import Button from './button'

export default class ContentButton extends React.Component {
  /**
   * constructor
   * @param  {object} props React props.
   * @return {void}
   */
  constructor(props) {
    super(props)
  }


  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    const text = this.props.plusMinux
    const count = this.props.count
    console.log(count);
    return (
      <div>
        <Button
          text={ text }
          count={ count }
        />
      </div>

    )
  }

}
