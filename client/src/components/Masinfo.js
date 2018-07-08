import React, { Component } from 'react'

class Masinfo extends Component {
  render() {
    return (
      <div className="Masinfo">
        <section id="masinfo">
        <div class="row marg-box">
            <div class="col m3 l3 s3 center hex-size">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-square fa-4x orange-text"></i></a>
            </div>
            <div class="col m3 l3 s3 center hex-size">
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp fa-4x orange-text"></i></a>
            </div>
            <div class="col m3 l3 s3 center hex-size">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-4x orange-text"></i></a>
            </div>
            <div class="col m3 l3 s3 center hex-size">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram fa-4x orange-text"></i></a>
            </div>
        </div>
    </section>
      </div>
    )
  }
}
export default Masinfo;