import { Elements } from "./elements.js"
import { State } from "./state.js"

let timeoutID

export function CountDown() {
  clearTimeout(timeoutID)

  if (State.isPlaying) {
    Elements.seconds.innerHTML = String(
      --Elements.seconds.textContent
    ).padStart(2, 0)
  }

  if (Elements.seconds.textContent < 0) {
    Elements.seconds.innerHTML = 59
    Elements.minutes.innerHTML = String(
      --Elements.minutes.textContent
    ).padStart(2, 0)
  }

  if (Elements.minutes.textContent < 0) {
    Elements.minutes.innerHTML = String(0).padStart(2, 0)
    Elements.seconds.innerHTML = String(0).padStart(2, 0)
  }

  if (
    Elements.minutes.textContent == 0 &&
    Elements.seconds.textContent == 0 &&
    State.isPlaying
  ) {
    State.isPlaying = false
    Elements.btnPlay.removeAttribute("disabled")
    return
  }

  timeoutID = setTimeout(() => {
    CountDown()
  }, 1000)
}
