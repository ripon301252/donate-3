
document.getElementById('btn-donate-now-1').addEventListener('click', function(){
    const addMoney = getInputFieldValueById('input-add-money-1');
    const balance = getTextFieldValueById('account-balance-1');
    const cashOut = getTextFieldValueById('cash-out');

    if(addMoney <= 0 || isNaN(addMoney)){
        alert('Failed to add money!');
        return;
    }

    const newBalance = addMoney + balance;
    document.getElementById('account-balance-1').innerText = newBalance;

    const mainCashOut = cashOut - newBalance;
    document.getElementById('cash-out').innerText = mainCashOut;

    // add to transaction history
    const div = document.createElement('div');
    const time = new Date();
    div.classList.add('bg-purple-300'); 
    div.innerHTML = time;
    div.innerHTML = `
        
        <p class="text-center text-black px-5 pb-5 pt-5"> ${addMoney} Taka is Donated for Donate for food at Noakhali Bangladesh</p>
        <P class="text-center text-black pb-5">${time}</P>
    `
    // should be a common function
    document.getElementById('transaction-section').appendChild(div);

    //----------------------------------------------------------------------

     // Get the modal
     const modal = document.getElementById("myModal");
    
     // Get the button that opens the modal
     const btn = document.getElementById("btn-donate-now-1");
    
     // Get the <span> element that closes the modal
     const span = document.getElementsByClassName("close-modal")[0];
 
     // When the user clicks the button, open the modal 
     btn.onclick = function() {
     modal.style.display = "block";
     }
    
     // When the user clicks on <span> (x), close the modal
     span.onclick = function() {
     modal.style.display = "none";
     }
 
     // When the user clicks anywhere outside of the modal, close it
     window.onclick = function(event) {
         if (event.target == modal) {
             modal.style.display = "none";
         }
     }
})




document.getElementById('btn-donate-now-2').addEventListener('click', function(){
    const addMoney = getInputFieldValueById('input-add-money-2');
    const balance = getTextFieldValueById('account-balance-2');
    const cashOut = getTextFieldValueById('cash-out');

    if(addMoney <= 0 || isNaN(addMoney)){
        alert('Failed to add money!');
        return;
    }

    const newBalance = addMoney + balance;
    document.getElementById('account-balance-2').innerText = newBalance;

    const mainCashOut = cashOut - newBalance;
    document.getElementById('cash-out').innerText = mainCashOut;

    // add to transaction history
    const div = document.createElement('div');
    const time = new Date();
    div.classList.add('bg-purple-300'); 
    div.innerHTML = time;
    div.innerHTML = `
        <p class="text-center text-black px-5 pb-5 pt-5"> ${addMoney} Taka is Donated for Donate for food at Noakhali Bangladesh</p>
        <P class="text-center text-black pb-5">${time}</P>
    `
    // should be a common function
    document.getElementById('transaction-section').appendChild(div);

    //-------------------------------------------------------------------

    
    // Get the modal
     const modal = document.getElementById("myModal");
    
    // Get the button that opens the modal
    
     const btn = document.getElementById("btn-donate-now-2");
     
 
     // Get the <span> element that closes the modal
     const span = document.getElementsByClassName("close-modal")[0];
 
     // When the user clicks the button, open the modal 
    
     btn.onclick = function() {
     modal.style.display = "block";
     }
    
      // When the user clicks on <span> (x), close the modal
     span.onclick = function() {
     modal.style.display = "none";
     }
 
     // When the user clicks anywhere outside of the modal, close it
     window.onclick = function(event) {
         if (event.target == modal) {
             modal.style.display = "none";
         }
     }
     
})






document.getElementById('btn-donate-now-3').addEventListener('click', function(){
    const addMoney = getInputFieldValueById('input-add-money-3');
    const balance = getTextFieldValueById('account-balance-3');
    const cashOut = getTextFieldValueById('cash-out');

    if(addMoney <= 0 || isNaN(addMoney)){
        alert('Failed to add money!');
        return;
    }

    const newBalance = addMoney + balance;
    document.getElementById('account-balance-3').innerText = newBalance;

    const mainCashOut = cashOut - newBalance;
    document.getElementById('cash-out').innerText = mainCashOut;

    // add to transaction history
    const div = document.createElement('div');
    const time = new Date();
    div.classList.add('bg-purple-300'); 
    div.innerHTML = time;
    div.innerHTML = `
        <p class="text-center text-black px-5 pb-5 pt-5"> ${addMoney} Taka is Donated for Donate for food at Noakhali Bangladesh</p>
        <P class="text-center text-black pb-5">${time}</P>
    `
    // should be a common function
    document.getElementById('transaction-section').appendChild(div);

    //--------------------------------------------------------------

     // Get the modal
     const modal = document.getElementById("myModal");
    
     // Get the button that opens the modal
    
     const btn = document.getElementById("btn-donate-now-3");
 
     // Get the <span> element that closes the modal
     const span = document.getElementsByClassName("close-modal")[0];
 
     // When the user clicks the button, open the modal 
    
     btn.onclick = function() {
     modal.style.display = "block";
     }
 
     // When the user clicks on <span> (x), close the modal
     span.onclick = function() {
     modal.style.display = "none";
     }
 
     // When the user clicks anywhere outside of the modal, close it
     window.onclick = function(event) {
         if (event.target == modal) {
             modal.style.display = "none";
         }
     }
})
