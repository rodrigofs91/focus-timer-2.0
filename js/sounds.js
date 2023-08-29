import { Elements } from "./elements.js"
import { State } from "./state.js"

const forestAudio = new Audio("./assets/forest.wav")
const rainAudio = new Audio("./assets/rain.wav")
const coffeeShopAudio = new Audio("./assets/coffee-shop.wav")
const fireplaceAudio = new Audio("./assets/fireplace.wav")

Elements.btnForest.addEventListener("click", () => {
  Elements.btnForest.classList.toggle("selected")

  const isSelected = Elements.btnForest.classList.contains("selected")

  Elements.btnRain.classList.remove("selected")
  Elements.btnCoffeeShop.classList.remove("selected")
  Elements.btnFireplace.classList.remove("selected")

  rainAudio.pause()
  rainAudio.currentTime = 0

  coffeeShopAudio.pause()
  coffeeShopAudio.currentTime = 0

  fireplaceAudio.pause()
  fireplaceAudio.currentTime = 0

  if (isSelected) {
    State.musicOn = true
    forestAudio.play()
    forestAudio.loop = true
    return
  }

  State.musicOn = false
  forestAudio.pause()
  forestAudio.currentTime = 0
})

Elements.btnRain.addEventListener("click", () => {
  Elements.btnRain.classList.toggle("selected")

  const isSelected = Elements.btnRain.classList.contains("selected")

  Elements.btnForest.classList.remove("selected")
  Elements.btnCoffeeShop.classList.remove("selected")
  Elements.btnFireplace.classList.remove("selected")

  forestAudio.pause()
  forestAudio.currentTime = 0

  coffeeShopAudio.pause()
  coffeeShopAudio.currentTime = 0

  fireplaceAudio.pause()
  fireplaceAudio.currentTime = 0

  if (isSelected) {
    State.musicOn = true
    rainAudio.play()
    rainAudio.loop = true
    return
  }

  State.musicOn = false
  rainAudio.pause()
  rainAudio.currentTime = 0
})

Elements.btnCoffeeShop.addEventListener("click", () => {
  Elements.btnCoffeeShop.classList.toggle("selected")

  const isSelected = Elements.btnCoffeeShop.classList.contains("selected")

  Elements.btnForest.classList.remove("selected")
  Elements.btnRain.classList.remove("selected")
  Elements.btnFireplace.classList.remove("selected")

  forestAudio.pause()
  forestAudio.currentTime = 0

  rainAudio.pause()
  rainAudio.currentTime = 0

  fireplaceAudio.pause()
  fireplaceAudio.currentTime = 0

  if (isSelected) {
    State.musicOn = true
    coffeeShopAudio.play()
    coffeeShopAudio.loop = true
    return
  }

  State.musicOn = false
  coffeeShopAudio.pause()
  coffeeShopAudio.currentTime = 0
})

Elements.btnFireplace.addEventListener("click", () => {
  Elements.btnFireplace.classList.toggle("selected")

  const isSelected = Elements.btnFireplace.classList.contains("selected")

  Elements.btnForest.classList.remove("selected")
  Elements.btnRain.classList.remove("selected")
  Elements.btnCoffeeShop.classList.remove("selected")

  forestAudio.pause()
  forestAudio.currentTime = 0

  rainAudio.pause()
  rainAudio.currentTime = 0

  coffeeShopAudio.pause()
  coffeeShopAudio.currentTime = 0

  if (isSelected) {
    State.musicOn = true
    fireplaceAudio.play()
    fireplaceAudio.loop = true
    return
  }

  State.musicOn = false
  fireplaceAudio.pause()
  fireplaceAudio.currentTime = 0
})
