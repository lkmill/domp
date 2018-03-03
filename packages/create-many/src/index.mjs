export default function createMany(htmlString) {
  // TODO either format htmlString or make sure no empty text nodes have been created
  const container = document.createElement('div');

  container.innerHTML = htmlString;

  return Array.from(container.childNodes);
}
