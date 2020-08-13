import { LitElement, html, css } from 'https://miniapp.chown.org.uk/static/lit-element/2.3.1/lit-element-02.js';

export class Counter extends LitElement {
  static get properties() {
    return {
      initial: { type: Number }
    };
  }

  static get styles() {
    return css`
      * {
        font-family: Montserrat;
      }

      :host {
        display: inline-block;
        border: 4px solid #c0c0ff;
        border-radius: 1rem;
        padding: 1rem 2rem;
        text-align: center;
      }

      div {
        margin-bottom: 0.5rem;
      }

      button {
        padding: 0.5rem 1rem;
        border: 0;
        border-radius: 0.5rem;
        outline: none;
        color: white;
        background-color: #4040ff;
        transition: background-color 0.5s;
      }

      button:hover {
        background-color: #8080ff;
      }
    `;
  }

  constructor() {
    super();
    this.count = 0;
  }

  increment() {
    this.count++;
    this.requestUpdate();
  }

  render() {
    return html`
      <div>Clicks: ${this.initial + this.count}</div>
      <button @click=${this.increment}>Add One</button>
    `;
  }

}

window.customElements.define('demo-counter', Counter);
