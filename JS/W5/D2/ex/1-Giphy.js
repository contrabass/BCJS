let XHR = new XMLHttpRequest();
XHR.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
, tr ue);        https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&ApiKey=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
XHR.responseType='json';
XHR.send();
let robots=[]
XHR.onload = function () {
    console.log(XHR.response);
}