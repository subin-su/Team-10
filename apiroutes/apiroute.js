const axios =require('axios')
const stockVal=document.getElementById('abc')
const clickF=document.getElementById('stock')
module.exports=(app)=>{  

clickF.addEventListener("click",()=>{
    app.put('/search',async(req,res)=>{
 
        const url=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockVal.value}&apikey=ICUNIKLEZU9X9WT2`;
        try{
            const stock=await axios.get(url);
            res.json(stock.data)
            console.log(stock.data)
        } catch (err){
            console.log(err.message);
            res.status(101).send('Server Error')
        }
    })
})
   
}
