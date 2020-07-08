import React from 'react'
import { button } from '@material-ui/core';
//function like the usage in @material-ui
function Square(props) {
  return (
      <button className="square" variant="contained" onClick={props.onClick}>
        {props.value}
      </button>
  )
}

export default Square;