import { precacheAndRoute } from 'workbox-precaching'

precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener('install', () => {
  console.log('Service Worker: Installed')
  self.skipWaiting()
})

// import 'regenerator-runtime'
// import CacheHelper from './utils/cache-helper'

// // Daftar asset yang akan dicaching
// const assetsToCache = [
//   './',
//   './icons/icon_32px.png',
//   './icons/icon_48px.png',
//   './icons/icon_64px.png',
//   './icons/icon_72px.png',
//   './icons/icon_96px.png',
//   './icons/icon_128px.png',
//   './icons/icon_256px.png',
//   './icons/icon_512px.png',
//   './index.html',
//   './favicon.png',
//   './app.bundle.js',
//   './app.webmanifest',
//   './sw.bundle.js'
// ]

// self.addEventListener('install', (event) => {
//   event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]))
// })

// self.addEventListener('activate', (event) => {
//   event.waitUntil(CacheHelper.deleteOldCache())
// })

// self.addEventListener('fetch', (event) => {
//   event.respondWith(CacheHelper.revalidateCache(event.request))
// })
