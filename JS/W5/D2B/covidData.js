const countryField = document.getElementById("countryField")
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.responseType = 'json';

function getData(){
const data = null;
xhr.open("GET", `https://covid-19-data.p.rapidapi.com/report/country/name?name=${countryField.value}&date=2020-04-01`);
xhr.setRequestHeader("x-rapidapi-key", "8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c");
xhr.setRequestHeader("x-rapidapi-host", "covid-19-data.p.rapidapi.com");
xhr.send(data);
}

xhr.onload = function() {
    // console.log(xhr.response);
    outputData(xhr.response);
}

xhr.onerror = function() {
  alert("Please try in few minutes, server is down");
};

function outputData(arr){
    const ziv = document.getElementById("Ziv")
    console.log(arr[0])

}