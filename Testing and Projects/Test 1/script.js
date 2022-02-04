let button = document.getElementsByTagName("button")[0];
let calcButton = document.getElementsByTagName("button")[1];
let disclaimer = document.getElementById("disclaimer");
let result = document.getElementById("result");
let currency = document.getElementById("dropdown");
let input = document.getElementById("inp");

let updater = {
    url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
    fetchData: async function () {
        let response = await fetch(this.url);
        let data = await response.json();
        return data;
    },
    updateValue: function() {
        let data = this.fetchData();
        console.log(data);
        const {bpi, time} = updater.fetchData();
        result.innerHTML = `
            <p>the rate is ${bpi[`${currency.value}`].symbol}${bpi[`${currency.value}`].rate}</p>
            <p>last updated on ${time.updated}</p>
        `;
        disclaimer.innerHTML = `${data.disclaimer}`;
    }
}
button.addEventListener("click", function(){
    updater.updateValue();
})
updater.fetchData();
updater.updateValue();