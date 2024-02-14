(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-add-open]"),
      closeModalBtn: document.querySelector("[data-add-close]"),
      modal: document.querySelector("[data-add]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();