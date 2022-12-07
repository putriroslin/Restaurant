/* eslint-disable no-undef */
const assert = require('assert')

Feature('Liking Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query')
  I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found')
})

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found')

  I.amOnPage('/')
  I.seeElement('.resto_list')
  I.seeElement('.resto_item_detail')
  I.seeElement('.name-item a')

  const firstRestaurant = locate('.name-item a').first()
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.resto_item')
  const likedRestaurantName = await I.grabTextFrom('.name-item')

  assert.strictEqual(firstRestaurantName, likedRestaurantName)
})

Scenario('searching restaurants', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found')

  I.amOnPage('/')

  I.seeElement('.name-item a')

  const names = []

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.name-item a').at(i))

    I.seeElement('#likeButton')

    I.click('#likeButton')

    names.push(await I.grabTextFrom('.name'))

    I.amOnPage('/')
  }

  I.amOnPage('/#/favorite')
  I.seeElement('#query')

  const searchQuery = names[1].substring(1, 3)
  const matchingRestaurants = names.filter(
    (name) => name.indexOf(searchQuery) !== -1
  )

  I.fillField('#query', searchQuery)
  I.pressKey('Enter')

  const visibleFavoritedRestaurants = await I.grabNumberOfVisibleElements(
    '.resto_item'
  )
  assert.strictEqual(matchingRestaurants.length, visibleFavoritedRestaurants)

  matchingRestaurants.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(
      locate('.name-item').at(index + 1)
    )
    assert.strictEqual(name, visibleName)
  })
})
