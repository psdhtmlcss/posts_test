const createElement = ({id, createDate, link, promo, views, heading}) => (
  `<article class="article" data-post-id="${id}">
    <div class="img"><img src="${link}" alt="${heading}" /></div>
    <footer>
      <strong>Дата создания:</strong> <time>${new Date(createDate)}</time><br>
      <strong>Кол-во просмотров:</strong> <span class="views-count">${views}</span><br>
      ${promo ? 'Промо' : ''}
    </footer>
  </article>`
);

export default class Post {
  constructor(post) {
    this._post = post;
  }

  createPostTemplate() {
    return createElement(this._post);
  }
}