var selectedItems = []; 

function liPress(item) {
    if (!event.ctrlKey) { 
        selectedItems.forEach(function(selectedItem) {
            selectedItem.classList.remove('selected');
        });
        selectedItems = []; 
    }

    var index = selectedItems.indexOf(item);
    if (index == -1) {
        selectedItems.push(item);
        item.classList.add('selected');
    } else {
        selectedItems.splice(index, 1);
        item.classList.remove('selected');
    }
    
}
