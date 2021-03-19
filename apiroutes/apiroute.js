const fetch=require('node-fetch')
const axios =require('axios')
//const stock=require("../public/assets/js/stock")
// module.exports=(app)=>{
//     app.get('/search/:id',async(req,res,data)=>{
//         const url=`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${req.params.id}&apikey=ICUNIKLEZU9X9WT2`;
//         fetch(url)
//         .then(res=>res.json())
//         .then(data=>res.send(data))
        
//     })
// }
module.exports=(app)=>{
    app.put('/api/stockSearch', async (req, res) => {
        const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=ICUNIKLEZU9X9WT2`;
        //Async and await
        try {
            const stock = await axios.get(url);
            res.json(stock.data);
        } catch (error) {
            console.log(error.message);
            res.status(500).send('Server Error - Whoops');
        }
    });

}
