import React, { Component } from 'react'

class Floatingicon extends Component {
  render() {
    return (
      <div className="Floatingicon">
        <div className="fixed-action-btn" id="fixed-action-btn">
            
            <a className="btn-floating btn-large white">
              <i className="material-icons blue" >account_circle</i>
            </a>
            <ul>
                <li><a className="btn-floating green" href="#inicio"><i className="material-icons">arrow_upward</i></a></li>
                <li><a class="btn-floating red"><i className="material-icons">power_settings_new</i></a></li>
            </ul>
          </div>
      </div>
    )
  }
}
export default Floatingicon;