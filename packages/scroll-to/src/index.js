/**
 * @param {number} coordX - the x coordinate to screw to
 * @param {number} coordY - offset in y-axis to scroll to
 * @param {number} [duration=0] - duration of scroll animation
 * @returns {void}
 */
export default function scrollTo(coordX, coordY, duration = 0) {
  const startOffset = window.pageYOffset

  const difference = coordY - startOffset

  if (difference !== 0) {
    if (!duration) {
      return window.scrollTo(coordX, coordY)
    }

    let startTime

    // eslint-disable-next-line
    function step(timestamp) {
      if (!startTime) {
        startTime = timestamp
      }

      const progress = (timestamp - startTime) / duration

      if (progress >= 1) {
        window.scrollTo(coordX, coordY)
      } else {
        window.scrollTo(coordX, startOffset + difference * progress)

        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }
}
