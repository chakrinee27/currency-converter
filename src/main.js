function displayPrice() {
    let amount = document.getElementById('amount').value;
    const url = "https://api.apilayer.com/exchangerates_data/convert?to=USD&from=INR&amount="+amount;
    let options = {
        method: 'GET',
        headers: {
            'apikey':"fiVC4NaKzhY1QDcVT80vmwI4yqLg75nO"
        }
    }
    let fetchRes = fetch(url, options);
    fetchRes.then(res => res.json()).then(d => {
            console.log(d.result);
            document.getElementById("result").innerHTML = d.result + " USD";
        });
}