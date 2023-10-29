export default class Loader {
  renderLoaderTemplate() {
    return `<div class="loader">
      <?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="32px" height="32px" viewBox="0 0 128 128" xml:space="preserve"><g><circle cx="16" cy="64" r="16" fill="#777777"/><circle cx="16" cy="64" r="16" fill="#a4a4a4" transform="rotate(45,64,64)"/><circle cx="16" cy="64" r="16" fill="#c6c6c6" transform="rotate(90,64,64)"/><circle cx="16" cy="64" r="16" fill="#e4e4e4" transform="rotate(135,64,64)"/><circle cx="16" cy="64" r="16" fill="#efefef" transform="rotate(180,64,64)"/><circle cx="16" cy="64" r="16" fill="#efefef" transform="rotate(225,64,64)"/><circle cx="16" cy="64" r="16" fill="#efefef" transform="rotate(270,64,64)"/><circle cx="16" cy="64" r="16" fill="#efefef" transform="rotate(315,64,64)"/><animateTransform attributeName="transform" type="rotate" values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64" calcMode="discrete" dur="720ms" repeatCount="indefinite"></animateTransform></g></svg>
    </div>`;
  }
}