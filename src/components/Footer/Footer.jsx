import React, { Component } from 'react'
import "./Footer.css"

export default class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="salom">
          <div className="footer">
            <div className="one-div">
              <h1>Murojat uchun tel raqam <span>(+998-77-217-27-17)</span></h1>
            </div>
            <div className="zakariyo">
              <h5>Manzil: &copy; <span>Uchqo'rg'on tumani</span></h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
