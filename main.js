window.onload = () => {
    const aside = document.querySelector("aside")
    const expandButton = document.querySelector("#expandButton")
    const search = document.querySelector("#options #search")
    const searchInput = document.querySelector("#options #search input")

    expandButton.addEventListener("click", () => aside.classList.toggle("expanded"))
    search.addEventListener("click", () => {
        if (aside.classList.contains("expanded") == false) {
            aside.classList.add("expanded")
            searchInput.focus()
        }
    })
}