document.getElementById("login-btn").addEventListener('click',function(event){
    event.preventDefault();
    const accountnumber = document.getElementById("Account-number").value;

    const pin = document.getElementById("pin").value;

    const convertpin = parseInt(pin)
    
    if(accountnumber.length === 11){
        if(convertpin===1234){
            console.log("okey thik ase")
        }
        else{
            console.log("pin thik nai")
        }
    }
    else{
        console.log("Need valid account Number")
    }
    


})