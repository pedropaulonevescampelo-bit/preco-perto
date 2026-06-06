
async function searchProduct(){

const product =

document
.getElementById(
"productInput"
)
.value
.toLowerCase()
.trim();

if(!product){

alert(
"Digite algo"
);

return;

}


const response =

await fetch(

"https://fakestoreapi.com/products"

);

const products =

await response.json();


const filtered =

products.filter(item=>

item.title
.toLowerCase()
.includes(
product
)

);


render(filtered);

}



function render(results){

const area=

document
.getElementById(
"results"
);

area.innerHTML="";


if(results.length===0){

area.innerHTML=

"<h2>Nenhum produto encontrado</h2>";

return;

}


results.forEach(item=>{


area.innerHTML += `

<div class="card">

<img

class="product-image"

src="${item.image}"

>

<div class="info">

<h3>

${item.title}

</h3>

<div class="price">

R$ ${item.price}

</div>

<div class="store">

Categoria:

${item.category}

</div>

<a

class="link-button"

href="#"

target="_blank"

>

Ver produto

</a>

</div>

</div>

`;

});


}

