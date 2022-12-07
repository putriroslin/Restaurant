import FavoriteRestoIdb from '../../src/scripts/data/favorite-idb'
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter'

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestoIdb,
    restaurant
  })
}

export { createLikeButtonPresenterWithRestaurant }
