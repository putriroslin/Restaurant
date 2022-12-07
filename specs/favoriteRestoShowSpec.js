/* eslint-disable no-new */
/* eslint-disable no-undef */
import FavoriteRestoIdb from '../src/scripts/data/favorite-idb'
import FavoriteRestoSearchView from '../src/scripts/views/pages/liked-resto/favorite-resto-search-view'
import FavoriteRestoShowPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-show-presenter'

describe('Showing all favorite restaurants', () => {
  let view

  const renderTemplate = () => {
    view = new FavoriteRestoSearchView()
    document.body.innerHTML = view.getTemplate()
  }

  beforeEach(() => {
    renderTemplate()
  })

  describe('When no restaurants have been liked', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestoIdb)

      new FavoriteRestoShowPresenter({
        view,
        favoriteRestaurants
      })

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1)
    })

    it('should show the information that no restaurants have been liked', (done) => {
      document
        .getElementById('restaurants')
        .addEventListener('restaurants:updated', () => {
          expect(
            document.querySelectorAll('.resto-item__not__found').length
          ).toEqual(1)

          done()
        })

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestoIdb)
      favoriteRestaurants.getAllRestaurants.and.returnValues([])

      new FavoriteRestoShowPresenter({
        view,
        favoriteRestaurants
      })
    })
  })

  describe('When favorite restaurants exist', () => {
    it('should show the restaurants', (done) => {
      document
        .getElementById('restaurants')
        .addEventListener('restaurants:updated', () => {
          expect(document.querySelectorAll('.resto_item').length).toEqual(2)
          done()
        })

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestoIdb)
      favoriteRestaurants.getAllRestaurants.and.returnValues([
        {
          id: 11,
          name: 'A',
          description: 'Sebuah restaurant A'
        },
        {
          id: 22,
          name: 'B',
          description: 'Sebuah restaurant B'
        }
      ])

      new FavoriteRestoShowPresenter({
        view,
        favoriteRestaurants
      })
    })
  })
})
