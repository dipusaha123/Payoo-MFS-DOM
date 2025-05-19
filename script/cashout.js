document.getElementById("cash-out-btn").addEventListener("click",function(even){
    even.preventDefault();
    const pin = document.getElementById("cashout-pin").value;
    const convertpin = parseInt(pin)
    const anount = document.getElementById("cashout-amount").value;
     const convertamount = parseFloat(anount)
     
     const mainbalance = document.getElementById("main-balance").innerText;
     const convertmainbalance = parseInt(mainbalance)

     if(convertpin===1234){
        const sum = convertmainbalance -convertamount;
        document.getElementById("main-balance").innerText= sum;

     }
     else{
        "Enter The valid pin"
     }
    
})