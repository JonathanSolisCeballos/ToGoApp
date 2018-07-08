import React, { Component } from 'react';
import cerdito2 from '../img/cerdito2.jpg';
import moto from '../img/moto.jpg';
import tiempo from '../img/tiempo3.jpg'

class Quienessomos extends Component {
  render() {
    return (
      <div className="Quienessomos">
        <section className="margin-bottom" id="quienessomos">
        <div className="nav-wrapper center">
            <h2>¿Quienes somos?</h2>
        </div>
        
        <div className="row">
            <div className="col s12 m4 l4">
                <div className="card">
                    <div className="card-image">
                        <img src={cerdito2} alt="cerdito"/>
                </div>
                <div className="card-content">
                    <p>
                        Con esta aplicación estaras ahorrando hasta en un 80 % en gasolina y tiempo, asi
                        que no tendras que dejar de hacer tus tareas para pedir algo.
                    </p>
                </div>
                    <div className="card-action">
                        <span className="card-title orange-text">Ahorra dinero!</span>
                    </div>
                </div>
            </div>
            <div className="col s12 m4 l4">
                <div className="card">
                    <div className="card-image">
                        <img src={moto} alt="moto"/>
                    </div>
                    <div className="card-content">
                        <p>
                        No sotros aseguramos tu mercamcia en su totalidad, desde que sale de la tienda.
                        asi que animate y no esperes mas !
                        </p>
                    </div>
                    <div className="card-action">
                        <span className="card-title orange-text">Entregas de inmediato!</span>
                    </div>
                </div>
            </div>
            <div className="col s12 m4 l4">
                <div className="card">
                    <div className="card-image">
                        <img src={tiempo} alt="reloj"/>
                    </div>
                    <div className="card-content">
                        <p>
                            Ahora con esta app estas a un botón de estar disfrutando 
                            de tus comidas favoritas en compania de tu familia y amigos.
                        </p>
                    </div>
                    <div className="card-action">
                        <span className="card-title orange-text ">Buscalo por muy poco!</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </div>
    )
  }
}
export default Quienessomos;
