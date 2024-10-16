let url = 'https://api.thecatapi.com/v1/images/search?limit=1'
//https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
let url2 = 'https://cat-fact.herokuapp.com/facts/random?amount=1'
//https://alexwohlbruck.github.io/cat-facts/
//has some not cat facts?

document.querySelector('button').addEventListener('click',getAll) 

function getAll() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data[0].url;        
    })
    fetch(url2)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('p').innerText = data.text;        
    })
}