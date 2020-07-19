import {
    elements
} from './base';



let counter = 0;

export function renderList(table) {
    const tabNoDelete = [];

    table.forEach(function (item) {
        if (!item.trash) {
            tabNoDelete.push(item);
            elements.nameValues.style.display = 'flex';
        }
    });
    console.log(tabNoDelete)
    localStorage.setItem("TODO", JSON.stringify(tabNoDelete));

    // PROBA
    elements.productLists.innerHTML = '';
    tabNoDelete.forEach((element) => {
        const markup = ` <li class="product__item" data-id="${counter}">
            <p class="product__item-count">${element.count}</p>
            <p class="product__item-unit">${element.unit}</p>
            <p class="product__item-name" id="product-name">${element.name}</p>
            <p class="product__item-category" data-category="${element.category}">${element.category}</p>
            <div class="product__line"></div>
            <div class="btn-product__group">
            <button data-function="buy" class="btn btn--click btn--product-item-done">Kupione</button>
            <button data-function="delete" class="btn btn--click btn--product-item-remove">Usuń</button>
            <button data-function="edit" class="btn btn--click btn--product-item-edit">Edytuj</button>
            </div>
            </li>  
            `;
        elements.productLists.insertAdjacentHTML('beforeend', markup);
        counter++;

    })

}

// export function listCategory(table) {

//     localStorage.setItem("TODO", JSON.stringify(table));


//     elements.productLists.innerHTML = '';
//     table.forEach((element) => {
//         const markup = `   <div class="category__box">
//         <h2 class="category__heading">${element.category}</h2>
//         <ul class="category__lists">
//             <li class="category__item">${element.name}</li>
//         </ul>
//     </div>
//         elements.productLists.insertAdjacentHTML('beforeend', markup);
//         counter++;
// `
//     })
// }