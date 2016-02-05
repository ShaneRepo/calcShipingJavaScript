function calcShipping(){
    var price = parseFloat(document.getElementById("price").value);
    var min = 1.50;
    var minTotal = parseFloat((price + min));
    var percent = parseFloat((price * 0.10) / 100);
    var total = parseFloat(percent + price);
    if(price <= 25.00){
        window.alert("Total fee is " + minTotal);
    }
    else{
        window.alert("Total fee is " + total);
    }

}
document.getElementById("submit").addEventListener("onclick",calcShipping,false);