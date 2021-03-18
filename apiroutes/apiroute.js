module.exports=(app)=>{
    app.put('/stockSearch', async (req, res) => {
        const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=aapl&apikey=ICUNIKLEZU9X9WT2`;
        //Async and await
        try {
            const stock = await axios.get(url);
            console.log(stock.data);
        } catch (error) {
            console.log(error.message);
            res.status(500).send('Server Error - Whoops');
        }
    });
}      
 