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


try{

const response =

await fetch(

"https://fakestoreapi.com/products"

);


const products =

await response.json();


const filtered =

products.filter(item =>

item.title
.toLowerCase()
.includes(product)

||

item.category
.toLowerCase()
.includes(product)

||

item.description
.toLowerCase()
.includes(product)

)

.sort(

(a,b)=>

a.price-b.price

);


render(filtered);

}

catch(error){

document
.getElementById(
"results"
)
.innerHTML =

"<h2>Erro ao buscar produtos</h2>";

console.log(error);

}

}



function render(results){

const area =

document
.getElementById(
"results"
);


area.innerHTML = "";


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

alt="${item.title}"

>

<div class="info">

<h3>

${item.title}

</h3>

<div class="store">

${item.category}

</div>

<div class="price">

R$ ${item.price}

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
