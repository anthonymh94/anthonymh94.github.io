function openModal(src) {
    const modal = document.getElementById("modal");
    const img = document.getElementById("modal-img");

    img.src = src;
    modal.classList.remove("hide");
}

document.getElementById("modal").addEventListener("click", () => {
    document.getElementById("modal").classList.add("hide");
});