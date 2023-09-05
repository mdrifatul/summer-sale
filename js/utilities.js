function getCardAmount(cordMoney){
    const cardAmount = document.getElementById(cordMoney);
    const cardAmountValueStr = cardAmount.innerText;
    const cardValue = parseFloat(cardAmountValueStr) ;
    return cardValue ;
}


function totalAmount(amount, newAmount){
   const textAmount = document.getElementById(amount);
   textAmount.innerText = newAmount
} 

function addProductsName(name){
    const nameArea = document.getElementById('itemsName')
    const li = document.createElement('li');
    li.innerText = name;
    nameArea.appendChild(li);

}





