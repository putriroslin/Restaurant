/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
import 'regenerator-runtime'
import '../styles/main.css'
import '../styles/responsive.css'
import './components/AppFooter'
import App from './views/App'
import swRegister from './utils/sw-register'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const START = 2
const NUMBER_OF_IMAGES = 50

const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('.menu'),
  content: document.querySelector('#main')
})
window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
