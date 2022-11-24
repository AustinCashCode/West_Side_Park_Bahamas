let referenceModal = document.getElementById("References")
referenceModal.addEventListener("click", () => {
    let toShow = document.getElementsByClassName("hidden")
    for(let i = toShow.length - 1; i >= 0; i--) {
        toShow[i].classList.remove("hidden")
    }
})


let modalClose = document.getElementById("close-button")
modalClose.addEventListener("click", () => {
    let backdrop = document.getElementById("modal-backdrop")
    let myModal = document.getElementById("references-modal")

    backdrop.classList.add("hidden")
    myModal.classList.add("hidden")

})