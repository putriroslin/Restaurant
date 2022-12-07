/* eslint-disable no-tabs */
import tempaletCreator from '../../templates/template-creator'

class FavoriteRestoSearchView {
  getTemplate () {
    return `
		<section id="resto" tabindex="0">
			<h2 tabindex="0">Favorited Restaurant</h2>
			<input id="query" type="text" placeholder="Search...">
			<div id="restaurants" class="resto_list"></div>
		</section>
		`
  }

  runWhenUserIsSearching (callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value)
    })
  }

  showFavoriteRestaurants (restaurants = []) {
    let html
    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, restaurant) =>
          carry.concat(
            tempaletCreator.createRestaurantItemTemplate(restaurant)
          ),
        ''
      )
    } else {
      html = this._getEmptyRestaurantTemplate()
    }

    document.getElementById('restaurants').innerHTML = html

    document
      .getElementById('restaurants')
      .dispatchEvent(new Event('restaurants:updated'))
  }

  _getEmptyRestaurantTemplate () {
    return '<p class="resto-item__not__found">Tidak ada restaurant untuk ditampilkan</p>'
  }
}

export default FavoriteRestoSearchView
