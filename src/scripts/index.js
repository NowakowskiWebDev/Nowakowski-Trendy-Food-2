import {
    elements
} from './base';

import * as fun from './RenderFunctions'

// CREATION SECTION

elements.addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    fun.renderProducts()
})