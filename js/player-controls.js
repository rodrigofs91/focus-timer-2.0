import { CountDown } from "./count-down.js"
import { Elements } from "./elements.js"
import { State } from "./state.js"

Elements.btnPlus.addEventListener("click", () => {
  if (State.isPlaying) {
    return
  }

  let minutes = Number(Elements.minutes.innerHTML)

  minutes += 5

  if (minutes >= 60) {
    minutes = 60
  }

  Elements.minutes.innerHTML = minutes.toString().padStart(2, "0")
})

Elements.btnMinus.addEventListener("click", () => {
  if (State.isPlaying) {
    return
  }

  let minutes = Number(Elements.minutes.innerHTML)

  minutes -= 5

  if (minutes < 0) {
    minutes = 0
  }

  Elements.minutes.innerHTML = minutes.toString().padStart(2, "0")
})

Elements.btnPlay.addEventListener("click", () => {
  if (Elements.minutes.textContent == 0 && Elements.seconds.textContent == 0) {
    return
  }

  State.isPlaying = true

  Elements.btnPlay.setAttribute("disabled", true)

  CountDown()
})

Elements.btnStop.addEventListener("click", () => {
  State.isPlaying = false
  Elements.btnPlay.removeAttribute("disabled")

  Elements.minutes.textContent = State.minutes
  Elements.seconds.textContent = State.seconds
})
