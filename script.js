

function greet(){
    alert ()
}


(carousel=>{
    let carouselEl= document.getElementById("carousel-Interval")
    let carouselInterval = `<div class="carousel-inner">
                 <div class="carousel-item active">
                      <img src="https://imgs.search.brave.com/feMvdXTiaiY8iVcOQv144_O2_N05TqjNv5H4wnvF-Nk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFFN0tv/N3ZlcG8vMS8wLzE2/MDB3L2NhbnZhLXNo/b3AtbmV3LXByb2R1/Y3RzLXdlYnNpdGUt/YmFubmVyLWJyb3du/LC13aGl0ZSwtdGFu/LUxrWnNOQ1czWDF3/LmpwZw&w=1380"  class="d-block w-100" alt="...">
                 </div>
                <div class="carousel-item">
                      <img src="https://img.freepik.com/free-vector/horizontal-banner-template-black-friday-sales_23-2150867247.jpg?t=st=1723466964~exp=1723470564~hmac=8d144a44471d4efd8b4badce95f1dfac3f51d7f1a25cb0ce90d555bca4557e5c&w=1380"  class="d-block w-100" alt="...">
                 </div>
                 <div class="carousel-item">   
                     <img src="https://img.freepik.com/free-vector/flat-horizontal-banner-template-black-friday-sale_23-2150852978.jpg?t=st=1723467125~exp=1723470725~hmac=c8b29c63629e190a2cb50ca5cec648f4875a4b58cf48aad8793ba038c8ead68d&w=1380" class="d-block w-100" alt="...">
                  </div>
            </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>`
          carouselEl.innerHTML= carouselInterval
    })
    


fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(products=>{
              let productsListEl = document.getElementById("product-list")
              let productsList = ``       
 for (let product of products){
     productsList += `<div  class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                 <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="...">
                     <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">$${product.price}</p>
                       <a href="#" class="btn btn-primary">View Products</a>
                   </div>
               </div>
             </div>`
            }
            productsListEl.innerHTML = productsList
            })
         



            
const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', function (event) {
    event.preventDefault();  

    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    searchProducts(searchQuery);
});


async function searchProducts(query) {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();


        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(query)
        );


        displayProducts(filteredProducts);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}
