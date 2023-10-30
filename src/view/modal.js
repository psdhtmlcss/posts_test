const createElement = () => (
  `<div class="modal">
    <div class="modal-body">
      <h2>Создать пост</h2>
      <form>
        <label>
          <strong>Заголовок</strong>
          <input type="text" placeholder="Заголовок" class="form-heading form-control" required>
        </label>
        <label>
          <strong>Ссылка</strong> <small>(абсолютный URL)</small>
          <input type="url" placeholder="https://example.com/image.jpg" class="form-link form-control" required>
        </label>
        <label>
          <strong>Описание</strong> <small>(не менее 20 символов)</small>
          <textarea placeholder="Описание" minlength="20" class="form-description form-control" required></textarea>
        </label>
        <label class="checkbox"><input type="checkbox" class="form-promo"> <strong>Промо</strong></label>
        <div class="buttons">
          <button type="button" class="close-modal">Закрыть</button>
          <button type="submit" class="add-post">Добавить</button>
        </div>
      </form>
    </div>
  </div>`
);

export default class Modal {
  createModalTemplate() {
    return createElement();
  }
}