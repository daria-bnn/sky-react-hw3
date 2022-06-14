import React from 'react'

class CounterSimple extends React.Component {
  constructor(props) {
    super(props)

    this.min = props.min
    this.max = props.max

    this.state = { current: this.min }
  }

  increase = () => {
    if (this.state.current >= this.max) return
    this.setState((prevState) => ({ current: prevState.current + 1 }))
  }

  decrease = () => {
    if (this.state.current <= this.min) return
    this.setState((prevState) => ({ current: prevState.current - 1 }))
  }

  render() {
    return (
      <div>
        <h2>Простой счётчик</h2>
        <button type="button" onClick={this.decrease}>
          Уменьшить
        </button>
        <span>{this.state.current}</span>
        <button type="button" onClick={this.increase}>
          Увеличить
        </button>
      </div>
    )
  }
}

export default CounterSimple
