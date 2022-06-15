import React from 'react'

class CounterInput extends React.Component {
  constructor(props) {
    super(props)

    this.min = props.min
    this.max = props.max

    this.state = { current: this.min }
  }

  onChange = (event) => {
    const newText = event.target.value
    const validNumbers = /^-?[1-9]?\d*$/

    if (!validNumbers.test(newText)) {
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
      this.state.current === '' ||
      this.state.current === '-'
    )
      return

    this.setState((prevState) => ({
      current: parseInt(prevState.current, 10) + 1,
    }))
  }

  decrease = () => {
    if (
      this.state.current <= this.min ||
      this.state.current === '' ||
      this.state.current === '-'
    )
      return

    this.setState((prevState) => ({ current: +prevState.current - 1 }))
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
