import {
    elements
} from './base';
import {
    renderList
} from './renderList';




// CLEAR INPUTS
const clearInput = () => {
    // elements.searchInput.value = '';
    elements.inputName.value = '';
    elements.inputCategory.value = '';
    elements.inputCount.value = '';
    elements.selectUnit.value = '';
};

let id;
let LIST = [];


// RENDER PRODUCTS
export const renderFunctions = () => {
    const data = localStorage.getItem("TODO");

    if (data) {
        LIST = JSON.parse(data)
    }

    if (elements.inputCount.value && elements.selectUnit.value && elements.inputName.value && elements.inputCategory.value) {
        elements.productLists.innerHTML = '';

        LIST.push({
            count: elements.inputCount.value,
            unit: elements.selectUnit.value,
            name: elements.inputName.value,
            category: elements.inputCategory.value,
            id: id,
            trash: false,
        });

        id++;
        elements.productLists.innerHTML = '';
        renderList(LIST);

        localStorage.setItem("TODO", JSON.stringify(LIST));
        clearInput()
        elements.paragWarning.innerHTML = ''
        return true
    } else {
        elements.paragWarning.innerHTML = 'Proszę uzupełnić wszystkie pola!'
    }
}

// RENDER CATEGORY

// let listCategory = [];

// export const renderCategory = () => {

//     const dataCategory = localStorage.getItem("CATEGORY");

//     if (dataCategory) {
//         listCategory = JSON.parse(dataCategory)
//     }


//     if (elements.inputCount.value && elements.selectUnit.value && elements.inputName.value && elements.inputCategory.value) {

//         const name = elements.inputName.value;
//         const category = elements.inputCategory.value;


//         listCategory.push({
//             category: category,
//             name: name
//         });

//         listCategory.forEach((element) => {

//             const markup = `   <div class="category__box">
//             <h2 class="category__heading">${element.category}</h2>
//             <ul class="category__lists">
//                 <li class="category__item">${element.name}</li>
//             </ul>
//         </div>
//                 `;
//             elements.categoryContainer.insertAdjacentHTML('beforeend', markup);
//         })


//         localStorage.setItem("CATEGORY", JSON.stringify(listCategory));


//     } else {
//         return null;
//     }
// }