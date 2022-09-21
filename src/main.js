// url = "https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}"

// const request = async ( url,{to: to, from: from, amount: amount}, method = 'GET' ) => {
//     let options = {
//         method
//     };
//     if ( 'GET' == method ) {
//         url += '?' + ( new URLSearchParams( {to: to, from: from, amount: amount} ) ).toString();
//     } else {
//         options.body = JSON.stringify( {to: to, from: from, amount: amount} );
//     }
    
//     const response = await fetch("url", options);
//     const data = await response.json();
//        console.log(data);
// };

// const get = ( url, {to: to, from: from, amount: amount} ) => request( url, {to: to, from: from, amount: amount}, 'GET' );

// get( "url",{to: to, from: from, amount: amount} )
// .then( response => {
//     console.log(response)
// } )

// const url = "https://api.apilayer.com/exchangerates_data/convert?to=USD&from=INR&amount=6500";
// let options = {
//     method: 'GET',
//     headers: {
//         'apikey':'ksh5KEsMhzI2at2GC0ifMjOwVXkXTrOJ'
//     }
// }
// let fetchRes = fetch(url, options);
// fetchRes.then(res => res.json()).then(d => {
//         console.log(d.result);
//     });

function displayPrice() {
    let amount = document.getElementById('amount').value;
    const url = "https://api.apilayer.com/exchangerates_data/convert?to=USD&from=INR&amount="+amount;
    let options = {
        method: 'GET',
        headers: {
            'apikey':'ksh5KEsMhzI2at2GC0ifMjOwVXkXTrOJ'
        }
    }
    let fetchRes = fetch(url, options);
    fetchRes.then(res => res.json()).then(d => {
            console.log(d.result);
            document.getElementById("result").innerHTML = d.result + " USD";
        });
}