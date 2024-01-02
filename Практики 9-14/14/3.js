const list = document.getElementById('myList');
const items = list.getElementsByTagName('li');

list.addEventListener('click', function(event) {
    const clickedItem = event.target;

    if (event.ctrlKey || event.metaKey) {
        clickedItem.classList.toggle('selected');
    } else {
        for (const item of items) {
            if (item !== clickedItem) {
                item.classList.remove('selected');
            }
        }
        clickedItem.classList.toggle('selected');
    }
});