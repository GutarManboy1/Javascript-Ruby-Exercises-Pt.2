const items = document.querySelectorAll(".item");
const sortableList = document.querySelectorAll(".sortable-list")

items.forEach(item => {
    item.addEventListener("dragstart", () => {
        setTimeout(() => item.classList.add("dragging"), 0);
    });
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initSortableList = (e) => {
    const draggingItem = sortableList.querySelector("dragging");
    const siblings = [...sortableList = document.querySelectorAll(".item:not(.dragging)")];
    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.clientHeight / 2;
    });
    console.log(nextSibling);
    sortableList.insertBefore(draggingItem, nextSibling);
}

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", e => e.preventDefault``);