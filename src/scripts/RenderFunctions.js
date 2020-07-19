import {
    elements
} from './base';

// CLEAR INPUTS
const clearInput = () => {
    // elements.searchInput.value = '';
    elements.inputName.value = '';
    elements.inputCategory.value = '';
    elements.inputCount.value = '';
    elements.selectUnit.value = '';
};


const tab = []

// RENDER PRODUCTS
export const renderProducts = (count = elements.inputCount.value, unit = elements.selectUnit.value, name = elements.inputName.value, category = elements.inputCategory.value) => {

    const markup = `
        <li class="product__item">
        <p class="product__item-count">${count}</p>
        <p class="product__item-unit">${unit}</p>
        <p class="product__item-name" id="product-name">${name}</p>
        <p class="product__item-category">${category}</p>
        <div class="btn-product__group">
            <button class="btn btn--click btn--product-item-done">Kupione</button>
            <button class="btn btn--click btn--product-item-remove">Usuń</button>
            <button class="btn btn--click btn--product-item-edit">Edytuj</button>
        </div>
    </li>
        `
    if (count && unit && name && category) {
        elements.productLists.insertAdjacentHTML('beforeend', markup);
        clearInput()
        elements.paragWarning.innerHTML = ''
        return true
    } else {
        elements.paragWarning.innerHTML = 'Proszę uzuepłnić wszystkie pola!'
        return false
    }
};

// RENDER EDIT PRODUCTS
export const renderEdit = () => {
    const markup = `
        <div class="product-edit--active">
        <form class="product-edit__creation">
            <input id="product-edit__input--count"
                class="product-edit__input product-edit__input--count" type="number"
                placeholder="Wpisz ilość albo wagę">
            <select class="product-edit__select" name="unit" id="unit">
                <option value="">--Proszę wybrać jednostkę--</option>
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="litr">l</option>
                <option value="number">Ilość</option>
            </select>
            <input id="product-edit_input--name"
                class="product-edit__input product-edit__input--name" type="text"
                placeholder="Wpisz nazwe produktu">
            <input id="product-edit__input--category"
                class="product-edit__input product-edit__input--category" type="text"
                placeholder="Wpisz nazwe produktu">

            <button class="btn btn--edit-change">Zatwierdź</button>
    </div>
        `;
    elements.productLists.insertAdjacentHTML('beforeend', markup);
}