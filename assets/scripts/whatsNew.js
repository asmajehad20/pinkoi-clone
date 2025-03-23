import photos from './whatsNewPhotos.js';
console.log(photos);

const getProducts = (page, perPage = 6) => {
    const start = (page - 1) * perPage;
    return photos.slice(start, start + perPage);
};

const displayNewProducts = async(page=1)=>{
    const perPage = 6;
    const data = getProducts(page, perPage);
    console.log(data);
    const numberOfPages = Math.ceil(photos.length / perPage);
    page = (page - 1 + numberOfPages) % numberOfPages + 1;

    const result = data.map(product => {
        return( `
            <div class="product">
               <div class="image">
               <img src="${product.img}" alt="${product.title}">
               
                    <div class="hidden-Like">
                        <i class="fa-regular fa-heart"></i>
                    </div>
               </div>
               
               <p class="title">${product.title}</p>
               <p class="user">${product.user}</p>
               <p class="price">$${product.price}</p>
            </div>
 `);
      }).join('');

      document.querySelector(".whatsNewList").innerHTML = result; 

      let prevPage = (page - 2 + numberOfPages) % numberOfPages + 1;  
      let nextPage = page % numberOfPages + 1;  
      let paginationLink = `<li><button class="prev-btn" onclick=displayNewProducts(${prevPage})><i class="fa fa-chevron-left"></i></button></li>`;
      paginationLink += `<li><button class="next-btn" onclick=displayNewProducts(${nextPage})><i class="fa fa-chevron-right"></i></button></li>`;
      document.querySelector(".pagination4").innerHTML = paginationLink;

}
displayNewProducts();
window.displayNewProducts = displayNewProducts;


