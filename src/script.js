import {
  addListenerForSearchButton,
  buttonSearch
} from './api/components/evenListener.js';
//Example of username:torvalds,mojombo

addListenerForSearchButton("click", buttonSearch);