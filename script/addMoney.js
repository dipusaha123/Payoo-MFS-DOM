document.getElementById("add-money").addEventListener('click',function(event){
    event.preventDefault();

    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("pin").value;
    const convertedpin = parseInt(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalaance = parseFloat(mainBalance);


   if(amount & pin){
     if(convertedpin=== 1234){
        const sum = convertedAmount + convertedMainBalaance ;
        document.getElementById("main-balance").innerText= sum;   
    }
    else{
        alert("Enter Valid Pin")
    }
   }
   else{
    alert("Enter amount")
   }

})