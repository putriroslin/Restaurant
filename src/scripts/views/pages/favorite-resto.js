/* eslint-disable no-new */
/* eslint-disable no-tabs */
import FavoriteRestoIdb from '../../data/favorite-idb'
import FavoriteRestoSearchView from './liked-resto/favorite-resto-search-view'
import FavoriteRestoSearchPresenter from './liked-resto/favorite-resto-search-presenter'
import FavoriteRestoShowPresenter from './liked-resto/favorite-resto-show-presenter'

const view = new FavoriteRestoSearchView()

const FavoriteResto = {
  async render () {
    return view.getTemplate()
  },
  async afterRender () {
    new FavoriteRestoShowPresenter({ view, favoriteRestaurants: FavoriteRestoIdb })
    new FavoriteRestoSearchPresenter({ view, favoriteRestaurants: FavoriteRestoIdb })
  }
}
export default FavoriteResto
