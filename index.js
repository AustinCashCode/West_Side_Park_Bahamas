let referenceModal = document.getElementById("References")
referenceModal.addEventListener("click", () => {
    let toShow = document.getElementsByClassName("hidden")
    for(let i = toShow.length - 1; i >= 0; i--) {
        toShow[i].classList.remove("hidden")
    }
})