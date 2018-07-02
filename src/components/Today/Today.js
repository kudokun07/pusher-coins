import React, { Component } from 'react'
import axios from 'axios'

import './Today.css'

export default class Today extends Component {
  constructor() {
    super()
    this.state = {
      btcprice: '',
      ltcprice: '',
      ethprice: ''
    }

  }

  componentWillMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
         .then(response => {
          const { BTC, ETH, LTC } = response.data  
          
          this.setState({
            btcprice: BTC.USD,
            ethprice: ETH.USD,
            ltcprice: LTC.USD
          })
         })
         .catch(error => {
           console.log(error)
         })
  }





  render() {
    return (
      <div className="today--section container">
        <h2>Today</h2>
        <div className="columns today--section__box">
          <div className="column btc--section">
            <h5>{this.state.btcprice}</h5>
            <p>1 BTC</p>
          </div>
          <div className="column eth--section">
            <h5>{this.state.ethprice}</h5>
            <p>1 ETH</p>
          </div>
          <div className="column ltc--section">
            <h5>{this.state.ltcprice}</h5>
            <p>1 LTC</p>
          </div>
        </div>
      </div>
    )
  }
}
