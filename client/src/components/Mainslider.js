import React, { Component } from 'react'

class Mainslider extends Component {
  render() {
    return (
      <div className="Mainslider">
        <div className="slider fondo10 fondo-size">
        <ul className="slides ">
            <li>
                <div className="caption center-align">
                    <h3 className="cajadellogo">
                    <img src="img/togo5.png" alt="imgfondo" />
                    </h3>
                </div>
            </li>    
            <li>
                <div className="caption left-align">
                    <h3>Tu mejor opcion</h3>
                    <h5 className="light grey-text ">que va contigo</h5>
                </div>
            </li>
            <li>
                <div className="caption right-align">
                    <h3>La mejor satisfacción a sus usuarios</h3>
                    <h5 className="light grey-text">Siempre lo es!</h5>
                </div>
            </li>
            <li>
                <div className="caption center-align">
                    <h3>ToGo es una empresa responsable</h3>
                    <h5 className="light grey-text">Nunca tendras que preocuparte...</h5>
                </div>
            </li>
        </ul>
        </div>
      </div>
    )
  }
}
export default Mainslider;
