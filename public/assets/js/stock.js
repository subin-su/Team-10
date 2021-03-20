document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
    }
var val=document.getElementById("stock");
var cab=document.getElementById("abc")


val.addEventListener('click', function () {
    // Sweet Alert
   
    
    fetch(`/api/stockSearch/${cab.value}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        //body: JSON.stringify(newStock),
    })
    
        // Json those results
        .then((response) => response.json())
        // Get the data!
        .then((data) => {
           console.log(data["Global Quote"]["01. symbol"])
            // Set Variable for the stock symbol
            let stockSymbol = data["Global Quote"]["01. symbol"]
            // // Set Variable for the stock price
            let stockPrice = data["Global Quote"]["05. price"]

           // Query selector the classes
            let company = document.querySelector("#company")
            let price = document.querySelector("#price")
            // Display the search results to the page
            company.innerHTML = (`Stock Symbol: ${stockSymbol}`)
            price.textContent = (`Price: $${stockPrice}`)

        })

    })

})


