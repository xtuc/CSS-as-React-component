/**
 * Generate base class form future components
 *
 * @returns {String}
 */
export default () => `
import React from 'react'

class Base extends React.Component {
  static propTypes = {
    button: React.PropTypes.bool,
    style: React.PropTypes.object
  }
  static defaultProps = { button: false, style: null }

  render = () => {
    const { style, button, children, ...props } = this.props
    const Tag = button ? "button" : "div"

    if (style) {
      this.style = { ...this.style, ...style }
    }

    return <Tag style={ this.style } { ...props }>{ children }</Tag>
  }
}

`

