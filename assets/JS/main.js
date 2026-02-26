//link api 
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'
const column = document.getElementsByClassName('row')[0] 
const closeBtn = document.getElementById('close-btn')
fetch(endpoint)
.then(res => res.json())
.then (data =>{
    console.log(data);
    
    data.forEach(cardObj => {
        let card = cardObj
        console.log(card);
        
        const markup =`
        <div class="card">
        <img src="./assets/img/pin.svg" alt="pin" class="pin">
            <img class="card-img" src='${card.url}'></img>
            <div class="card-date">${card.date}</div>
            <div class="card-title">${card.title.toUpperCase()}</div>
        </div> 
        `
        column.innerHTML += markup

    });
    


})
off()
function on() {
  document.getElementById("overlay").style.display = "block";
}
function off() {
  document.getElementById("overlay").style.display = "none";
}
closeBtn.addEventListener('click', off)