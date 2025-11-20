document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById("menuToggle")
    const navMenu = document.getElementById("headerLinkList")
    const quoteBtn = document.getElementById("headerQuoteBtn")

    menuToggle.addEventListener("click", () => {
    console.log('i did the thing');
    navMenu.classList.toggle("active");
    quoteBtn.classList.toggle("quote")
  });
});

