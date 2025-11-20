function filterSelection(jobType) {
    pictures = document.getElementsByClassName("picture");
    buttons = document.getElementsByClassName("btn")

    for (i = 0; i < pictures.length; i++) {
        pictures[i].classList.remove("hide");

        if (!pictures[i].classList.contains(jobType)) {
            pictures[i].classList.add("hide");
        }
    } 

    for (i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains(jobType)) {
            buttons[i].style.backgroundColor = "yellow";
        }
        else {
            buttons[i].style.backgroundColor = "white";
        }
    }
}