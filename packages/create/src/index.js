export default function create(htmlString) {
  const container = document.createElement('div')

  container.innerHTML = htmlString.trim()

  return container.firstChild
}
