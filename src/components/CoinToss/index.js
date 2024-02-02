import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {ActiveToss: 0, total: 0, head: 0, tail: 0}

  generate = () => {
    const {ActiveToss, total, head, tail} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({ActiveToss: tossResult})
    if (tossResult === 0) {
      this.setState({total: total + 1, head: head + 1})
    } else {
      this.setState({total: total + 1, tail: tail + 1})
    }
  }

  display = () => {
    const {ActiveToss} = this.state
    if (ActiveToss === 0) {
      return (
        <img
          className="image-set"
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          alt="toss result"
        />
      )
    }
    return (
      <img
        className="image-set"
        src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
        alt="toss result"
      />
    )
  }

  render() {
    const {ActiveToss, total, head, tail} = this.state
    console.log(ActiveToss)
    return (
      <div className="main-con">
        <div className="sub-con">
          <h1 className="head">Coin Toss Game</h1>
          <p className="sub-head">Heads (or) Tails</p>
          {this.display()}
          <button className="but" onClick={this.generate}>
            Toss Coin
          </button>
          <div className="mini-con">
            <p className="para">Total:{total}</p>
            <p className="para"> Heads:{head}</p>
            <p className="para">Tails:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
