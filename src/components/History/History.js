import React, { Component } from 'react'
import './History.css'
import axios from 'axios';

export default class History extends Component {
	constructor() {
		super()
		this.state = {
			todayprice: {},
			yesterdayprice: {},
			twodayprice: {},
			threedayprice: {},
			fourdayprice: {}
		}
		this.getBTCPrices = this.getBTCPrices.bind(this)
		this.getETHPrices = this.getETHPrices.bind(this)
		this.getLTCPrices = this.getLTCPrices.bind(this)
	}

	getETHPrices = date => {
		return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts=' + date)
	}

	getBTCPrices = date => {
		return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=' + date)
	}

	getLTCPrices = date => {
		return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=LTC&tsyms=USD&ts=' + date)
	}

	
  
  render() {
    return (
      <div className="history--section container">
        <h2>History (past 5 days)</h2>
				<div className="history--section__box">
					<div className="history--section__box__inner">
						<h4>{this.state.todayprice.date}</h4>
						<div className="collumn">
							<p>1 BTC = {this.state.todayprice.btc}</p>
						</div>
						<div className="collumn">
							<p>1 ETH = {this.state.todayprice.eth}</p>
						</div>
						<div className="collumn">
							<p>1 LTC = {this.state.todayprice.ltc}</p>
						</div>
					</div>
					<div className="history--section__box__inner">
						<h4>{this.state.yesterdayprice.date}</h4>
						<div className="collumn">
							<p>1 BTC = {this.state.yesterdayprice.btc}</p>
						</div>
						<div className="collumn">
							<p>1 ETH = {this.state.yesterdayprice.eth}</p>
						</div>
						<div className="collumn">
							<p>1 LTC = {this.state.yesterdayprice.ltc}</p>
						</div>
					</div>
					<div className="history--section__box__inner">
						<h4>{this.state.twodayprice.date}</h4>
						<div className="collumn">
							<p>1 BTC = {this.state.twodayprice.btc}</p>
						</div>
						<div className="collumn">
							<p>1 ETH = {this.state.twodayprice.eth}</p>
						</div>
						<div className="collumn">
							<p>1 LTC = {this.state.twodayprice.ltc}</p>
						</div>
					</div>
					<div className="history--section__box__inner">
						<h4>{this.state.threedayprice.date}</h4>
						<div className="collumn">
							<p>1 BTC = {this.state.threedayprice.btc}</p>
						</div>
						<div className="collumn">
							<p>1 ETH = {this.state.threedayprice.eth}</p>
						</div>
						<div className="collumn">
							<p>1 LTC = {this.state.threedayprice.ltc}</p>
						</div>
					</div>
					<div className="history--section__box__inner">
						<h4>{this.state.fourdayprice.date}</h4>
						<div className="collumn">
							<p>1 BTC = {this.state.fourdayprice.btc}</p>
						</div>
						<div className="collumn">
							<p>1 ETH = {this.state.fourdayprice.eth}</p>
						</div>
						<div className="collumn">
							<p>1 LTC = {this.state.fourdayprice.ltc}</p>
						</div>
					</div>
				</div>
      </div>
    )
  }
}
