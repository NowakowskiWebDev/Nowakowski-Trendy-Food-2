import {
    elements
} from './base';
import {
    renderList
} from './renderList';
import {
    deleteItem
} from './deleteItem';


import {
    renderFunctions
}
from './RenderFunctions'

elements.nameValues.style.display = 'none';

let LIST = [];
const checkStorage = () => {
    const data = localStorage.getItem("TODO");
    if (data) {
        LIST = JSON.parse(data);
        return LIST;
    } else {
        return LIST = [];
    }
}

renderList(checkStorage());

// BTN SECTION
elements.productsBtn.addEventListener('click', () => {
    elements.creationSection.style.display = 'block';
    elements.productLists.style.display = 'block';
    // if (elements.categoryContainer) elements.categoryContainer.style.display = 'none'
    elements.nameValues.style.display = 'none';
    elements.paragWarning.innerHTML = '';
})

elements.categoryBtn.addEventListener('click', () => {
    renderFunctions();
    elements.nameValues.style.display = 'none';
    elements.productLists.style.display = 'none';
    elements.creationSection.style.display = 'none';
    elements.categoryContainer.style.display = 'block';
})

elements.addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // renderCategory();
    renderFunctions()
})



elements.productLists.addEventListener("click", function (event) {
    const element = event.target;

    const idItem = element.parentNode.parentNode.dataset.id;



    switch (element.dataset.function) {
        case 'buy':
            console.log(element);
            break;
        case 'delete':
            deleteItem(event.target, idItem)
            break;
        case 'edit':
            console.log(element);
            break;
    }
});