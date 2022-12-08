/* eslint-disable no-undef */
const assert = require('assert')

Feature('Unliking Restaurants')

Before(async ({ I }) => {
  I.amOnPage('/#/favorite')

  I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found')

  I.amOnPage('/')
  I.wait(2)
  I.seeElement('.name-item a')
  I.wait(2)
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

Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('.name-item a')
  I.click('.name-item a')

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found')
})
