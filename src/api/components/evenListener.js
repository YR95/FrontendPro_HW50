import {getUserByUserName} from './getUser.js';

export const buttonSearch = document.querySelector("#searchByUserName");
export const buttonSearchRandom = document.querySelector(
    "#searchRandovUserName");
export const inputSearchByUserName = document.querySelector("#usernameInput");

export function addListenerForSearchButton(method, idOfButton) {

  idOfButton.addEventListener(method, () => {
    getUserByUserName(inputSearchByUserName.value);
    inputSearchByUserName.value = "";
  });
}

export function addListenerForSearchRandomButton(method, idOfButton,
    randomUser) {

  idOfButton.addEventListener(method, () => {
    location.reload();
    alert(`Automatically generated random user: ${randomUser} `)
    getUserByUserName(randomUser);
  });

}