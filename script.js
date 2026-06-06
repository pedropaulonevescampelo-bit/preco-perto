function searchProduct(){

const product =

document
.getElementById(
"productInput"
)
.value
.trim();


if(!product){

alert(
"Digite algo"
);

return;

}


const encoded =

encodeURIComponent(
product
);


const stores=[

{

store:"Amazon",

price:randomPrice(),

link:
`https://www.amazon.com.br/s?k=${encoded}`,

image:
`https://source.unsplash.com/400x400/?${encoded}`

},

{

store:"Mercado Livre",

price:randomPrice(),

link:
`https://lista.mercadolivre.com.br/${encoded}`,

image:
`https://source.unsplash.com/401x401/?${encoded}`

},

{

store:"Magazine Luiza",

price:randomPrice(),

link:
`https://www.magazineluiza.com.br/busca/${encoded}/`,

image:
`https://source.unsplash.com/402x402/?${encoded}`

},

{

store:"Shopee",

price:randomPrice(),

link:
`https://shopee.com.br/search?keyword=${encoded}`,

image:
`https://source.unsplash.com/403x403/?${encoded}`

}

];


stores.sort(

(a,b)=>

a.price-b.price

);


render(
stores,
product
);

}



function randomPrice(){

return (

Math.random()*100
+50

).toFixed(2);

}



function render(
results,
product
){

const area=

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

onerror="
this.src=
'https://via.placeholder.com/300'
"

>

<div class="info">

<h3>

${product}

</h3>

<div class="store">

${item.store}

</div>

<div class="price">

R$ ${item.price}

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
