/* eslint-disable no-tabs */
import DBrestaurant from '../../data/restaurant'
import templateCreator from '../templates/template-creator'

const ListResto = {
  async render () {
    return `
	<section id="resto" tabindex="0">
		<h2 tabindex="0">Restaurant List</h2>
		<div id="restaurants" class="resto_list"></div>
	</section>
		`
  },
  async afterRender () {
    const resto = await DBrestaurant.ListRestaurant()
    const restaurantList = document.querySelector('#restaurants')
    resto?.forEach((restaurant) => {
      restaurantList.innerHTML += templateCreator.createRestaurantItemTemplate(restaurant)
    })
  }
}
export default ListResto
