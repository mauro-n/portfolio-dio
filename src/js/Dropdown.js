class Dropdown {
    static mount() {
        const container = document.querySelector(".itemContainer");
        const items = Array.of(...container.children);

        items.forEach(element => {
            element.querySelector("*").addEventListener("click", () => {
                if (element.classList.contains("open")) {
                    element.classList.remove("open");
                } else {
                    element.classList.add("open")
                }
            })
        })
    }
}

export default Dropdown;