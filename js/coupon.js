const couponApply = document.getElementById('couponId');

const couponField = document.getElementById('coupon-field');

couponField.addEventListener('keyup',function(e){
    const value = e.currentTarget.value;
    
    if(value === ""){
        couponApply.disabled = true;
    }else{
        couponApply.disabled = false;
    }
})






function applyCoupon(){
    const couponApply = document.getElementById('couponId');
    const couponNum = couponApply.innerText;

    const couponField = document.getElementById('coupon-field');
    const couponFieldText = couponField.value;
   
    
    if(couponNum === couponFieldText){
        coupon()
        const discountPercentage = 20;
        const totalPrice = getCardAmount('total-price');
        
        const discountAmount = (totalPrice * discountPercentage)/100;
        const discountPrice = totalPrice - discountAmount;
        totalAmount('discount', discountAmount);
        totalAmount('total', discountPrice);
    }else{
        alert("Please give a valid code")
    }

}





