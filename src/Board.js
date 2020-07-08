import React, {Component} from 'react'
import Square from './Square'
import {box} from '@material-ui/core';
class Board extends Component {
  constructor(props) {
    super(props)
  }


  renderSquare(i) {
    return <Square value={this.props.squares[i]}
                   onClick={() => this.props.onClick(i)}/>
  }

  render() {
    return (
        <box>
          <box className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </box>

          <box className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </box>

          <box className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </box>
        </box>
    )
  }
}

export default Board