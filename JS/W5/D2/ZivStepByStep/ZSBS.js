let xhr = new XMLHttpRequest();
let next=0;

function fetchData() {
  let search = document.getElementById("search").value;
  let limit = document.getElementById("limit").value;
  xhr.open(
    "GET",
    `https://api.giphy.com/v1/gifs/search?rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${search}&limit=${limit}&offset=`
  );
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = function () {
    if (xhr.status != 200) {
      // analyze HTTP status of the response e.g. 404: Not found
      // createImages(xhr.response)
      alert("Please try in a few minutes, the server is unresponsive");
    } else {
      //show the result
      // response is the server response
      // console.log(`done, got ${xhr.response.length} bytes`);
      createImages(xhr.response.data);
    }
    xhr.onerror = function () {
      alert("please try in a few minutes, server is down");
    }
    next = next + Number(limit);
  };
}

function createImages(arr) {
  let root = document.getElementById("root");
  root.innerHTML = "";
  arr.forEach((item, i) => {
    let img = document.createElement("IMG");
    img.setAttribute("src", item.images.fixed_height_small.url);
    root.appendChild(img);
  });
}

function deleteAll() {
  let root = document.getElementById("root");
  root.innerHTML = "";
}

function nextImages(){
    fetchData();
}