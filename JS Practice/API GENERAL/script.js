let text;

let getInfoButton = document.querySelector(`#getInfo`);
let hideInfoButton = document.querySelector(`#hideInfo`);
let name = document.querySelector(`#name`);
let photo = document.querySelector(`#photo`);
let followers = document.querySelector(`#followers`);

getInfoButton.addEventListener(`click`, function () {
    name.innerHTML = `${text.name}`;
    photo.innerHTML = `<img src="https://avatars.githubusercontent.com/u/11613311?v=4" alt="">`;
    followers.innerHTML = `${text.followers}`;
});

hideInfoButton.addEventListener(`click`, function () {
    name.innerHTML = ``;
    photo.innerHTML = ``;
    followers.innerHTML = ``;
});

const requestUrl = `https://api.github.com/users/hiteshchoudhary`;
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        text = JSON.parse(this.responseText);
        console.log(typeof text);
        console.log(text);
    }
};

xhr.send();