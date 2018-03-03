export default function createOne (htmlString) {
  const container = document.createElement('div')

  container.innerHTML = htmlString.trim()

  return container.firstChild
}
