document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
    }
var val=document.getElementById("stock");
var cab=document.getElementById("abc")
var moment1=document.getElementById("moment")
moment1.innerHTML=moment().format('LLLL');
var delete1=document.getElementById('delete')

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
            let stockhigh = data["Global Quote"]["03. high"]
            let stocklow = data["Global Quote"]["04. low"]
            // // Set Variable for the stock price
            let stockPrice = data["Global Quote"]["05. price"]
            
            if(stockSymbol){
                let company = document.querySelector("#company")
                let price = document.querySelector("#price")
                let high = document.querySelector("#high")
                let low = document.querySelector("#low")
                // Display the search results to the page
                company.innerHTML = (`Stock Symbol: ${stockSymbol}`)
                price.textContent = (`Price: $${stockPrice}`)
                high.innerHTML=(`High:${stockhigh}`)
                low.innerHTML=(`High:${stocklow}`)
                let condiments = document.querySelector("#condiments ")
                // Display the search results to the page
                var btn1 = document.createElement("div");
                
                btn1.innerHTML=cab.value;
                localStorage.setItem("Symbol" ,stockSymbol)
                localStorage.setItem("price" ,stockPrice)
                swal("You Searched for",`${stockSymbol}`, "success");
            }else{
                swal(`You Searched for ${cab.value}`,"Please enter valid ticker Symbol", "error");
                return;
            }
           // Query selector the classes
           
  

        })

    })
    delete1.addEventListener('click',function(){
        swal({
            title: "Are you sure?",
            text: "Once deleted, Data will be gone",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                company.innerHTML=" ";
                price.innerHTML=""
                high.innerHTML =""
                low.innerHTML=""
            } else {
              swal("Your imaginary file is safe!");
            }
          });
      
    })

})


