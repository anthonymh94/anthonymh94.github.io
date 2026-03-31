document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");

    // Function to open modal
    function openModal(src) {
        modalImg.src = src;
        modal.classList.remove("hide");
    }

    // Attach click to all gallery images
    document.querySelectorAll('.staged').forEach(img => {
        img.addEventListener('click', () => {
            openModal(img.src);
        });
    });

    // Close modal when clicking background
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hide");
            modalImg.src = "";
        }
    });

    closeBtn.addEventListener("click", () => {
    modal.classList.add("hide");
    modalImg.src = ""; // clear image
    });
});
