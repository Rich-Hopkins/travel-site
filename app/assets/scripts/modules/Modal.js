/**
 * Created by Rich Hopkins on 3/9/2017.
 */
import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events() {
    // clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this));

    // clicking close button
    this.closeModalButton.click(this.closeModal.bind(this));

    // any keypress
    $(document).keyup(this.keypressHandler.bind(this));
  }

  keypressHandler(e)  {
    if(e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false;
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
    return false;
  }

}



export default Modal;