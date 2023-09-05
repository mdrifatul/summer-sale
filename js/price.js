function spoonCard(){
    const spoonItems = getCardAmount('spoon-price');
    const totalPrice = getCardAmount('total-price');

    const price = spoonItems + totalPrice;
    totalAmount('total-price', price);
    totalAmount('total', price);

    addProductsName('K.Accessories');
}


function cuttingBoard(){
    const cuttingBoard = getCardAmount('board-price');
    const totalPrice = getCardAmount('total-price');

    const price = cuttingBoard + totalPrice;
    totalAmount('total-price', price)
    totalAmount('total', price);

    addProductsName('K.Accessories');

}

function cooker(){
    const cooker = getCardAmount('cooker-price')
    const totalPrice = getCardAmount('total-price');

    const price = cooker + totalPrice;
    totalAmount('total-price', price);
    totalAmount('total', price);

    addProductsName('Cooker');

}
function sportsCap(){
    const sportsCap = getCardAmount('cap-price');
    const totalPrice = getCardAmount('total-price');

    const price = sportsCap + totalPrice;
    totalAmount('total-price', price);
    totalAmount('total', price);

    addProductsName('Sports Cap');

}
function jerseySet(){
    const jerseySet = getCardAmount('set-price');
    const totalPrice = getCardAmount('total-price');

    const price = jerseySet + totalPrice;
    totalAmount('total-price', price);
    totalAmount('total', price);

    addProductsName('Full Jersey Set');


}
function sportsCates(){
    const sportsCates = getCardAmount('cates-price');
    const totalPrice = getCardAmount('total-price');

    const price = sportsCates + totalPrice;
    totalAmount('total-price', price);
    totalAmount('total', price);

    addProductsName('Sports cates');
}

