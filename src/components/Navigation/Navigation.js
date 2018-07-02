import React, { Component } from 'react'

import Icon from 'react-icons-kit'

export default class Navigation extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="nav-brand"><p></p></div>
        <ul className="coin-icons">
            {/* <li><Icon size='32' icon={}/> </li>
            <li><Icon size='32' icon={}/> </li>
            <li><Icon size='32' icon={}/> </li> */}
        </ul>
      </div>
    )
  }
}
