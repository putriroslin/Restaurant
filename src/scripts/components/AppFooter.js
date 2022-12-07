/* eslint-disable no-tabs */
class AppFooter extends HTMLElement {
  constructor () {
    super()

    this._shadowRoot = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this._shadowRoot.innerHTML =
	`
		<p tabindex="0">Copyright © 2022 Hits Restaurant</p>
	`
  }
}

customElements.define('app-footer', AppFooter)
