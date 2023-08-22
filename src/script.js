import {
  addListenerForSearchButton, addListenerForSearchRandomButton,
  buttonSearch, buttonSearchRandom
} from './api/components/evenListener.js';
import {generateString} from './api/utils.js';

addListenerForSearchButton("click", buttonSearch);
addListenerForSearchRandomButton("click", buttonSearchRandom,
    generateString(7));