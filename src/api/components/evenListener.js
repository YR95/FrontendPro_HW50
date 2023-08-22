import {getUserByUserName} from './getUser.js';

export const buttonSearch = document.querySelector("#searchByUserName");
export const buttonSearchRandom = document.querySelector(
    "#searchRandovUserName");
export const inputSearchByUserName = document.querySelector("#usernameInput");

export function addListenerForSearchButton(method, idOfButton) {

  idOfButton.addEventListener(method, () => {
    if (document.querySelector("#error").innerText === "") {
      getUserByUserName(inputSearchByUserName.value);
      inputSearchByUserName.value = "";
    }
  });
}

export function addListenerForSearchRandomButton(method, idOfButton,
    randomUser) {

  idOfButton.addEventListener(method, () => {
    location.reload();
    alert(`Automatically generated random user: ${randomUser} `);
    getUserByUserName(randomUser);
  });

}

export function validate(method, element) {
  element.addEventListener(method, () => {

    const input = document.getElementById('usernameInput').value;
    const error = document.getElementById('error');

    if (input.length < 3) {
      error.textContent = 'Search term is too short!';
      return;
    }

    if (!/^[a-zA-Z0-9 ]*$/.test(input)) {
      error.textContent = 'Please enter only alphanumeric characters without special symbols.';
      return;
    }

    error.textContent = '';
  });
}