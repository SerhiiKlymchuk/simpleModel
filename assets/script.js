let imgBox = document.querySelector(".gallery__box");

for (i of imgBox.children) {
    i.addEventListener("click", showModal.bind(i))
}

function showModal() {
    let modal = document.createElement("div");
    let wrapper = document.createElement("div");
    let modalHTML = `<img class="modal__img" src="${this.src}" alt="">`;

    modal.classList.add("modal");
    wrapper.classList.add("modal-wrap");

    wrapper.style.height = document.body.scrollHeight + "px";

    document.body.append(modal)
    modal.innerHTML = modalHTML;
    document.body.append(wrapper)

    hideModal(modal, wrapper);
}

function hideModal(modal, wrapper) {
    let event = modal.addEventListener("click", (e) => {
        wrapper.style.animationName = "fadeOutBg";
        modal.remove();

        setTimeout(() => {
            wrapper.remove();
        }, 400)
    })

    modal.removeEventListener("click", event);
}
