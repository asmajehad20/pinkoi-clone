import photos from './featuredBrandsPhotos.js';
console.log(photos);

const getProducts = (page, perPage = 3) => {
    const start = (page - 1) * perPage;
    return photos.slice(start, start + perPage);
};

const displayFeaturedBrandProducts = async(page=1)=>{
    const perPage = 3;

    const data = getProducts(page, perPage);
    console.log(data);
    const numberOfPages = Math.ceil(photos.length / perPage);
    page = (page - 1 + numberOfPages) % numberOfPages + 1;

    const result = data.map(product => {
        return( `
            <div class="featuredBrandproduct">
               <div class="productImages">
                  <div class="productImgLeft"><img src="${product.img1}" alt="${product.user}"><div class="hidden-Like"></div></div>
                  <div class="productImgRight">
                    <div class="productImg1Right"><img src="${product.img2}" alt="${product.user}"><div class="hidden-Like"></div></div>
                    <div class="productImg2Right"><img src="${product.img3}" alt="${product.user}"><div class="hidden-Like"></div></div>
                  </div>
               </div>
               <div class="productInfo">
                  <div class="userImg"><img src="${product.userImg}" alt="${product.user}"></div>
                  <div class="nameFame">
                       <p class="productTitle">${product.user}</p>
                       <div class="horizantal"><i class="fa-regular fa-star"></i><p>Rating ${product.rating}</p></div>
                       <div class="horizantal"><i class="fa-regular fa-user"></i><p>Followers ${product.followers}</p></div>
                  </div>
                  <div class="productsBtns">
                      <button class="exploreBtn">Explore</button>
                      <button class="heartBtn">
                         <i class="fa-regular fa-heart"></i>
                      </button>
                  </div>
               </div>

            </div>
 `);
      }).join('');

      document.querySelector(".featuredBrandsList").innerHTML = result; 

      let prevPage = (page - 2 + numberOfPages) % numberOfPages + 1;  
      let nextPage = page % numberOfPages + 1;  
      let paginationLink = `<li><button class="prev-btn" onclick=displayFeaturedBrandProducts(${prevPage})><i class="fa fa-chevron-left"></i></button></li>`;
      paginationLink += `<li><button class="next-btn" onclick=displayFeaturedBrandProducts(${nextPage})><i class="fa fa-chevron-right"></i></button></li>`;
      document.querySelector(".pagination2").innerHTML = paginationLink;

}
displayFeaturedBrandProducts();
window.displayFeaturedBrandProducts = displayFeaturedBrandProducts;


