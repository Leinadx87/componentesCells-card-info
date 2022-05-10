import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CardInfo-styles.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<card-info></card-info>
```

##styling-doc

@customElement card-info
*/
export class CardInfo extends LitElement {
  static get is() {
    return 'card-info';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
      nombre: { type: String, 
                attribute: 'cambiandoattr',
                reflect: true,
              },
      apellidoPaterno: { type: String, },
      apellidoMaterno: { type: String, },
      imagen: { type: String, },
      color: { type: String, },
      edad: { type: Number, },
      ciudad: { type: String, },
      texto: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
    this.nombre = 'xxxxxx'
    this.apellidoPaterno = 'Mendoza'
    this.apellidoMaterno = 'Martinez'
    this.imagen = "bbva-1"
    this.color = "red"
    this.edad = 34
    this.ciudad = "CDMX"
    this.texto = "Esto debe de cambiar a lo que estoy escribiendo dentro del input"
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('card-info-shared-styles')
    ];
  }

  // Define a template
  mainNode = document.getElementById('main');
  render() {    
    return html`
    <p>Welcome to ${this.name}</p>
    <p>Nombre: <span>${this.nombre}</span></p>
    <p>Apellido Paterno: <span>${this.apellidoPaterno}</span></p>
    <p>Apellido Materno: <span>${this.apellidoMaterno}</span></p>
    <p>Imagen: <img id="img" src="${this.imagen}.jpg" alt="img-logo" width="100"></p>
    <p>Color: <strong id="color" style="color:${this.color}">TEXTO</strong></p>
    <p>Edad: <span>${this.edad}</span></p>
    <p>Ciudad: <span>${this.ciudad}</span></p>
    <slot name="prueba"></slot>
    ${this.templateV(this.apellidoPaterno)}  
    <button @click=${()=>document.write('Diste click en el boton')}>Click!</button>
    <hr>
    <input type="text" @input="${this._inputHandler}" value="${this.texto}">
    <p>${this.texto}</p>
    `;
  }

  

   templateV(valor){
    return html`
      <p>Hello ${valor}</p>
    `;
  };

  _inputHandler(evento){
    console.log("evento", evento)
    this.texto = evento.target.value;
  }

}
