/* eslint-disable no-prototype-builtins */
import { openDB } from 'idb'
import CONFIG from '../globals/config'

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade (database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' })
  }
})
const FavoriteRestoIdb = {
  async getRestaurant (id) {
    if (!id) {
      return
    }

    return (await dbPromise).get(OBJECT_STORE_NAME, id)
  },
  async getAllRestaurants () {
    return (await dbPromise).getAll(OBJECT_STORE_NAME)
  },
  async putRestaurant (restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant)
  },
  async deleteRestaurant (id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id)
  },
  async searchRestaurants (query) {
    return (await this.getAllRestaurants()).filter((restaurants) => {
      const loweredCaseRestoName = (restaurants.name || '-').toLowerCase()
      const jammedRestoName = loweredCaseRestoName.replace(/\s/g, '')
      const loweredCaseQuery = query.toLowerCase()
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '')
      return jammedRestoName.indexOf(jammedQuery) !== -1
    })
  }
}
export default FavoriteRestoIdb
