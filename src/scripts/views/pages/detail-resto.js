/* eslint-disable no-tabs */
import UrlParser from '../../routes/url-parser'
import DBrestaurant from '../../data/restaurant'
import templateCreator from '../templates/template-creator'
import FavoriteRestoIdb from '../../data/favorite-idb'
import LikeButtonPresenter from '../../utils/like-button-presenter'

const DetailResto = {
  async render () {
    return `
	<section id="resto" tabindex="0">
		<div id="restaurant" class="resto_detail"></div>
		<div tabindex="0" id="likeButtonContainer"></div>
	</section>
	`
  },
  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await DBrestaurant.DetailRestaurant(url.id)
    const restaurantDetail = document.querySelector('#restaurant')
    restaurantDetail.innerHTML =
      templateCreator.createRestaurantDetailTemplate(restaurant)

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestoIdb,
      restaurant: {
        id: restaurant.id,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        name: restaurant.name,
        description: restaurant.description
      }
    })
  }
}
export default DetailResto
