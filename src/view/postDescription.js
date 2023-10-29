import { formatter } from '../utils/utils';

const createElement = ({heading, id, createDate, link, description, promo, views}) => (
  `<section class="post-description" data-post-id="${id}">
    <div class="container">
      <h2>${heading}</h2>
      <div class="img"><img src="${link}" alt="${heading}" /></div>
      <p>${description}</p>
      <footer>
        <strong>Дата создания:</strong> <time>${formatter.format(createDate)}</time><br>
        <strong>Кол-во просмотров:</strong> <span class="views-count">${views}</span><br>
        ${promo ? 'Промо' : ''}
      </footer>
    </div>
  </section>`
);

export default class PostDescription {
  constructor(post) {
    this._post = post;
  }

  createPostDescriptionTemplate() {
    return createElement(this._post);
  }
}