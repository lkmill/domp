export default function scrollTo (coordX, coordY, duration) {
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
