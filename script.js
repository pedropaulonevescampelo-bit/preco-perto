const fakeDatabase = [

{

store:"Amazon",

price:159.90,

image:
"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",

link:
"https://amazon.com"

},

{

store:"Mercado Livre",

price:149.90,

image:
"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",

link:
"https://mercadolivre.com.br"

},

{

store:"Magazine Luiza",

price:167.50,

image:
"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",

link:
"https://magazineluiza.com.br"

},

{

store:"Shopee",

price:139.90,

image:
"https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",

link:
"https://shopee.com.br"

},

{

store:"Americanas",

price:178.00,

image:
"https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",

link:
"https://americanas.com.br"

}

];



function searchProduct(){

const product =

document
.getElementById(
"productInput"
).value.trim();


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

<img
class="product-image"
src="${item.image}"
alt="${product}"
>

<div class="info">

<h3>

${product}

</h3>

<div class="store">

${item.store}

</div>

<div class="price">

R$ ${item.price.toFixed(2)}

</div>

<a

class="link-button"

href="${item.link}"

target="_blank"

>

Ir para loja

</a>

</div>

</div>

`;

});


}

`;

});

}
