
const fakeDatabase = [

{
store:"Amazon",
price:159.90
},

{
store:"Mercado Livre",
price:149.90
},

{
store:"Magazine Luiza",
price:167.50
},

{
store:"Shopee",
price:139.90
},

{
store:"Americanas",
price:178.00
}

];


function searchProduct(){

const product =

document
.getElementById(
"productInput"
).value;

if(!product){

alert(
"Digite algo"
);

return;

}

const results =

[...fakeDatabase]

.sort(
(a,b)=>
a.price-b.price
);


render(
results,
product
);

}



function render(
results,
product
){

const area =

document
.getElementById(
"results"
);

area.innerHTML="";

results.forEach(item=>{

area.innerHTML += `

<div class="card">

<div>

<h3>

${product}

</h3>

<p>

${item.store}

</p>

</div>


<div class="price">

R$ ${item.price}

</div>


</div>

`;

});

}
