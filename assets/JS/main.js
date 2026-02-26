//link api 
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';
const column = document.getElementsByClassName('row')[0]; 
const closeBtn = document.getElementById('close-btn');
const imageEl = document.getElementsByClassName("image");
fetch(endpoint)
.then(res => res.json())
.then(data => {

let cardsHTML = "";
data.forEach(card => {
    cardsHTML += `
    <div class="card">
        <img src="./assets/img/pin.svg" alt="pin" class="pin">
        <img class="card-img" src="${card.url}" alt="${card.title}">
        <div class="card-date">${card.date}</div>
        <div class="card-title">${card.title.toUpperCase()}</div>
    </div>`;
});
column.innerHTML = cardsHTML;
})
    
off()
function on() {
  document.getElementById("overlay").style.display = "block";
}
function off() {
  document.getElementById("overlay").style.display = "none";
}
closeBtn.addEventListener('click', off)

