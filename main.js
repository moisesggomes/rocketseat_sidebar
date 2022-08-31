window.onload = () => {
    const aside = document.querySelector("aside")
    const expandButton = document.querySelector("#expandButton")
    const search = document.querySelector("#options #search")
    const searchInput = document.querySelector("#options #search input")

    expandButton.addEventListener("click", () => {
        aside.classList.toggle("expanded")
        if (window.screen.width >= 1024) {
            if (aside.classList.contains("expanded")) {
                document.querySelector("main").style.paddingLeft = "25rem"
            } else {
                document.querySelector("main").style.paddingLeft = "7.8rem"
            }
        } else {
            if (aside.classList.contains("expanded")) {
                document.body.style.overflowY = "hidden"
            } else {
                document.body.style.overflowY = "initial"
            }
        }
    })
    search.addEventListener("click", () => {
        if (aside.classList.contains("expanded") == false) {
            aside.classList.add("expanded")
        }
        searchInput.focus()
    })
}