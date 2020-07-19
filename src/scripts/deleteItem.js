import {
    renderList
} from './renderList';
import {
    elements
} from './base';

const data = localStorage.getItem("TODO");

const LIST = JSON.parse(data)

export function deleteItem(element, id) {
    element.parentNode.parentNode.remove();

    LIST[id].trash = true;
    localStorage.setItem("TODO", JSON.stringify(LIST));
}