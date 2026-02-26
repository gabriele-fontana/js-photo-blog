//link api 
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';
const column = document.getElementsByClassName('row')[0]; 
const closeBtn = document.getElementById('close-btn');
const imageEl = document.getElementsByClassName("image");
const overlay = document.getElementById("overlay");
const imgUrls = []
const imgIds = [] 
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
    console.log(card);
    imgUrls.push(card.url);
    imgIds.push(card.id);
    
    column.innerHTML = cardsHTML;
});
    
    const allCards = document.querySelectorAll('.card')
    for (let i = 0; i < allCards.length; i++) {
        allCards[i].addEventListener('click', () => {
        
            const imgUrl = imgUrls[i]
            console.log(imgUrl);
            on(imgUrl)
            
            
        });
    }
    

closeBtn.addEventListener('click', off)
})
    
off()


function on(url) {
  document.getElementById("overlay").style.display = "flex";
  overlayImg.src = url
}
function off() {
  document.getElementById("overlay").style.display = "none";
}

//milestone 3
//selezionare l'immagine all'interno dell'overlay
const overlayImg = overlay.querySelector('img');
//recuperare url dell'immagine 
//modificare img src='' nella funzione on