/* eslint-disable no-undef */
import FavoriteRestoIdb from '../src/scripts/data/favorite-idb'
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestoContract'

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestoIdb.deleteRestaurant(restaurant.id)
    })
  })

  itActsAsFavoriteRestaurantModel(FavoriteRestoIdb)
})
