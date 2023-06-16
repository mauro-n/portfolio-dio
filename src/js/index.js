import Dropdown from "./Dropdown.js";
import ContentUpdater from "./ContentUpdater.js"

Dropdown.mount();

ContentUpdater.setData()
.then(() => {
    ContentUpdater.update();
})

