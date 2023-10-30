const createElement = () => (
  `<div class="modal">
    <div class="modal-body">
      <h2>Создать пост</h2>
      <form>
        <input type="text" placeholder="Заголовок" class="form-heading" required>
        <input type="text" placeholder="Ссылка" class="form-link" required>
        <textarea placeholder="Описание" minlength="10" class="form-description" required></textarea>
        <label><input type="checkbox" class="form-promo"> Промо</label>
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