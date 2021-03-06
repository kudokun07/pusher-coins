import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
      <div className="topheader">
        <header className="container">
            <nav className="navbar">
                <div className="navbar-brand">
                    <span className="navbar-item">PusherCoins</span>
                </div>
                <div className="navbar-end">
                    <a className="navbar-item" href="https://pusher.com" target="_blank" rel="noopener noreferrer">Pusher.com</a>
                </div>
            </nav>
        </header>
      </div>
    )
  }
}
