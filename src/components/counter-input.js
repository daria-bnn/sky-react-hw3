import React from 'react'

class CounterInput extends React.Component {
  constructor(props) {
    super(props)

    this.min = props.min
    this.max = props.max

    this.state = { current: this.min }
  }

  onChange = (event) => {
    const { value } = event.target
    const validValues = /^-?[1-9]?\d*$/

    if (!validValues.test(value)) {
      return
    }

    const newText = parseInt(value, 10)

    if (Number.isNaN(newText)) {
      this.setState(() => ({ current: value }))
      return
    }

    if (newText > this.max) {
      this.setState(() => ({ current: this.max }))

      return
    }

    if (newText < this.min) {
      this.setState(() => ({ current: this.min }))

      return
    }

    this.setState(() => ({ current: newText }))
  }

  increase = () => {
    if (
      this.state.current >= this.max ||
      typeof this.state.current !== 'number'
    ) {
      return
    }

    this.setState((prevState) => ({
      current: prevState.current + 1,
    }))
  }

  decrease = () => {
    if (
      this.state.current <= this.min ||
      typeof this.state.current !== 'number'
    ) {
      return
    }

    this.setState((prevState) => ({
      current: prevState.current - 1,
    }))
  }

  render() {
    return (
      <div>
        <h2>Счётчик с инпут</h2>
        <button type="button" onClick={this.decrease}>
          -
        </button>
        <input onChange={this.onChange} value={this.state.current} />
        <button type="button" onClick={this.increase}>
          +
        </button>
      </div>
    )
  }
}

export default CounterInput
