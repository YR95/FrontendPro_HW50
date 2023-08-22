
export const resultDiv = document.querySelector("#result");

export function render(user) {
  resultDiv.innerText = "";
  let avatar = document.createElement("img");
  avatar.src = user.avatar;
  let username = document.createElement("p");
  username.innerText = user.username;
  let bio = document.createElement("p");
  bio.innerText = user.bio !== null ? user.bio : "no info";
  let location = document.createElement("p");
  location.innerText = user.location;
  let followers = document.createElement("p");
  followers.innerText = user.followers;

  resultDiv.append(avatar, username, bio, location, followers);
}