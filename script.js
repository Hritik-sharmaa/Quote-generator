let api_url = "https://api.quotable.io/random";
let content = document.getElementById("content");
let author = document.getElementById("author");

async function getQuote (url){
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    content.innerHTML = data.content;
    author.innerHTML = "-" + data.author;
}



