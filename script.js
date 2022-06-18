const authBtn = document.querySelector(".js-auth-btn");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");

function showAuth() {
    modal.classList.add("open");
}

function closeAuth() {
    modal.classList.remove("open");
}

authBtn.addEventListener("click", showAuth);

modalClose.addEventListener("click", closeAuth);

modal.addEventListener("click", closeAuth);

modalContainer.addEventListener("click", function (event) {
    event.stopPropagation();
});
