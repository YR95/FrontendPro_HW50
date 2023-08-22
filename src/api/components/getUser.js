import User from './User.js';
import {render, resultDiv} from './userDomChild.js';

export function getUserByUserName(username) {
  let url = `https://api.github.com/users/${username}`;
  fetch(url)
  .then(response => {
    if (response.status !== 404) {
     return  response.json();
    } else {
      alert("User not found");
      resultDiv.innerText = "";
      throw ("There is no such a user");
    }
  })
  .then(data => {
    if (data) {
      console.log(data);
      return new User(data.avatar_url, data.name, data?.bio, data.location,
          data.followers);
    }
  })
  .then(user => {
    console.log(user)
    render(user);
  })
  .catch(error => console.error(error));

};
