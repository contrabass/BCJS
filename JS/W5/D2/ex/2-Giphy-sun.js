let XHR = new XMLHttpRequest();
XHR.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
, true);
XHR.responseType='json';
XHR.send();
let robots=[]
XHR.onload = function () {
    
    // console.log(XHR.response);
    // console.log(XHR.response.data[2].images.original.url);
    for (let i=2; i<12; i++ ){
        let image = document.createElement("IMG");
        image.src = XHR.response.data[i].images.original.url;
        document.body.appendChild(image);
    }
}