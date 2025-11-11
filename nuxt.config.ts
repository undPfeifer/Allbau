import { defineNuxtConfig } from 'nuxt/config'
import fs from 'fs'
import path from 'path'

function generateGalleryJson() {
  const galleryDir = path.resolve('./public/gallery')
  const outputFile = path.resolve('./public/gallery.json')

  if (!fs.existsSync(galleryDir)) return

  const files = fs.readdirSync(galleryDir).filter(file =>
    /\.(jpe?g|png|gif|webp)$/i.test(file)
  )

  const urls = files.map(file => `/gallery/${file}`)
  fs.writeFileSync(outputFile, JSON.stringify(urls, null, 2))
  console.log(`✅ gallery.json generated with ${urls.length} images`)
}

export default defineNuxtConfig({
  hooks: {
    // Build-time generation
    'nitro:build:before': async () => {
      generateGalleryJson()
    },
    // Dev-time generation
    'dev:before': async () => {
      generateGalleryJson()
    },
    nitro: {
      preset: 'static' // tells Nitro to generate a full static site
    }
  
  }
})

