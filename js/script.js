const clientName=prompt("Enter your name");
const clientAge=parseInt(prompt("Enter your age"));
const numKm=parseInt(prompt("Enter the distance in km"));
const kmEuro=0.21;
const youngAge=18;
const oldAge=65;
const youngScount=0.2;
const oldScount=0.4;
let price=kmEuro*numKm;

let discount=0;


if(clientAge<youngAge){ //find the discount 
    discount=youngScount*price;
    
}
else if(clientAge>oldAge){
    discount=oldScount*price;
}
price-=discount;//update the price of the ticket
const finalPrice=price.toFixed(2);
//print the info about the price in the document
document.getElementById("container").innerHTML=`
<h1>client name:${clientName}</h1>
<p>client age:${clientAge}</p>
<p>Km:${numKm}</p>
<p> firstPrice: ${(price+=discount).toFixed(2)}&euro;</p>
<p>discount: ${discount.toFixed(2)}&euro;</p>
<p>final price:${finalPrice}&euro;</p>

`;