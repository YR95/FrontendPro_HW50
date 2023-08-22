import {getUserByUserName} from './getUser.js';

export const buttonSearch = document.querySelector("#searchByUserName");
export const inputSearchByUserName = document.querySelector("#usernameInput");

export function addListenerForSearchButton(method, idOfButton) {

  idOfButton.addEventListener(method, () => {
    getUserByUserName(inputSearchByUserName.value);
    inputSearchByUserName.value="";
  });
}
