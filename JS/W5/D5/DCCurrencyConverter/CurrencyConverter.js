const access_key = '6b543e9294a71d26a6606f5449cf71a6'
const list_url = `http://apilayer.net/api/list?access_key=${access_key}`
const rates_url = `http://apilayer.net/api/list?access_key=${access_key}&format=1`
const root = document.getElementById("root");

const getList = async () => {
    try{
        const response = await fetch(list_url);
        const data = await response.json();
        return data.currencies;
    }
    catch(e){
        throw new Error("Unable to get data from getList");
    }
}

const createList = async(arr,elm) => {
    const sel = document.createElement("SELECT");
    sel.setAttrubute("id",elm)
    sel.setAttrubute("name",elm)
    root.appendChild(sel);

    let opt = document.createElement("OPTION");
    opt.setAttribute("value","");
    opt.innerText="Please select currency";
    sel.appendChild(opt);

    arr.forEach(([key,value]) => {
        let opt = new Option(value,key);
        sel.appendChild(opt);           
    });
}

const getExchangeRate = async(fromCurrency,toCurrency) => {
    try {
        const response = await fetch(rate_url);
        const rates = await reponse.json();
        const rates = rates.quotes;

        const exchangeRate = rate["USD"+toCurrency] / rate ["USD" + fromCurrency];
        
        
    } catch (e) {
        throw new Error ("unable to get data from getExchangeRate")
    }
}

const createUI = async () => {
    const list = await getList();
    const arr = Object.entries(list);
    createList(arr);
    createList(arr);

    let amt = document.createElement("INPUT");
    amt.setAttribute("id","amount");
    amt.setAttribute("placeholder", "Amount");
    root.appendChild(amt);

    let btn = document.createElement("BUTTON");
    btn.setAttribute("id","btn");
    btn.innerText = "Calculate";
    root.appendChild(btn);
    let messageDiv = document.createElement("DIV"));
    root.appendChild(messageDiv);

    btn.addEventListener("click", function(){
        let fromCurrency = document.querySelector("#from").value; //another option - "div#from"
        let fromCurrency = document.querySelector("#to").value;
        let amount = document.querySelector("#amount").value;
        let rate = await getExchange(fromCurrency,toCurrency);
        const c_amount = (amount*rate).toFixed(2);
        messageDiv.innerText = `From ${fromCurrency} to ${toCurrency} = ${c_amount}`;
    })
        
}
createUI()

//=============================// let key = "access_key=6b543e9294a71d26a6606f5449cf71a6&format=1"
// // const bd = document.body;

// document.body.style.backgroundColor="black";
// document.body.style.color="white";

// let form = document.body.appendChild(document.createElement("form"));
// let sourceCurrency = form.appendChild(document.createElement("select"));
// // let opt=document.createElement("option");
// // opt.value="1";
// // opt.text="test";
// // sourceCurrency.add(opt,null);
// let input = form.appendChild(document.createElement("INPUT"));
// input.setAttribute("type", "number");
// let targetCurrency = form.appendChild(document.createElement("select"));

// let getCurrencies = async() => {
//     return await fetch("https://api.currencylayer.com/list? " + key + "& format = 1");
// }
// getCurrencies().then(result => {
//     console.log(result
//     }
//     ));
//=============================
// apilayer.net/api/list?access_key=... live?
// apilayer.net/api/live?access_key=... 

