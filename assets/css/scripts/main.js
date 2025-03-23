
document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.querySelector('.carousel-inner');
  
  const photos = [
      'assets/image/carousel/img1.avif',
      'assets/image/carousel/img2.avif',
      'assets/image/carousel/img3.avif'
  ];

  carouselInner.innerHTML = photos.map((item, index) => `
      <div class="carousel-item ${index === 1 ? 'active' : ''}">
          <img class="d-block w-100" src="${item}" alt="carousel image">
      </div>
  `).join('');

  let items = document.querySelectorAll('.carousel-item');
  let currentIndex = 1;
  
  setInterval(() => {
      
    updateCarousel();
}, 6000);

  function updateCarousel() {
    
    items = document.querySelectorAll('.carousel-item');
    items.forEach(item => item.classList.remove('active'));
    
    items[currentIndex+1].classList.add('active');
    
    const firstItem = items[0];
    carouselInner.removeChild(firstItem);
    carouselInner.appendChild(firstItem);
    
      
  }

  document.querySelector(".carousel-control-next").addEventListener("click", function () {
    items = document.querySelectorAll('.carousel-item');
    items.forEach(item => item.classList.remove('active'));
    const firstItem = items[2];
    carouselInner.removeChild(firstItem);
    carouselInner.appendChild(firstItem); 
      updateCarousel();
  });

  document.querySelector(".carousel-control-prev").addEventListener("click", function () {
    items = document.querySelectorAll('.carousel-item');
    items.forEach(item => item.classList.remove('active'));
    const firstItem = items[0];
    carouselInner.removeChild(firstItem);
    carouselInner.appendChild(firstItem); 
      updateCarousel();
  });

  
  
});

const categories = document.querySelectorAll(".category"); 
const dropdown = document.getElementById("dropdown");

categories.forEach(category => {
    category.addEventListener("mouseenter", () => {
        const categoryName = category.getAttribute("data-category"); 
        
        
        dropdown.style.display = "flex";  

        let content = '';
        if (categoryName === "Featured*") {
            content = 
            `<div class="featuredList">
                <div class="featured Row1">
                  <p>The Pinkoi Gift Guide</p>
                </div>
                <div class="featured Row2">
                  <p>Birthday Gifts</p>
                </div>
                <div class="featured Row3">
                  <p>Making choices for a better future</p>
                </div>
                <div class="featured Row4">
                  <p>Pinkoi Taiwan Souvenir Collection</p>
                </div>
            </div>`;
            dropdown.classList.add("featured-dropdown");
        } else if (categoryName === "Accessories") {
            content =
            `<div class="dropdownContent">
              <div class="dropdownContentCategories">
                 <div class="r">
                   <p>Accessories</p>
                   <i class="fas fa-arrow-right"></i>
                 </div>
                 <div class="r">
                   <p>Hair Accessories</p>
                   <i class="fas fa-arrow-right"></i>
                 </div>
                 <div class="r">
                   <p>Glasses & Sunglasses</p>
                   <i class="fas fa-arrow-right"></i>
                 </div>
                 <div class="r">
                   <p>Watches</p>
                   <i class="fas fa-arrow-right"></i>
                 </div>
                 <div class="r">
                   <p>Fashion Accessories</p>
                   <i class="fas fa-arrow-right"></i>
                 </div>
                 <div class="r">
                   <p>Masks</p>
                   <i class="fas fa-arrow-right"></i>
                 </div>
                 <div class="r">
                   <p>Keychains, Tags & Covers</p>
                   <i class="fas fa-arrow-right"></i>
                 </div>
              </div>
              <div class="dropdownContentMiddle">
                <p>Earrings & Clip-ons</p>
                <p>Bracelets</p>
                <p>Necklaces</p>
                <p>Chokers</p>
                <p>Collar Necklaces</p>
                <p>Long Necklaces</p>
                <p>General Rings</p>
                <p>Couples' Rings</p>
                <p>Anklets & Ankle Bracelets</p>
                <p>Brooches</p>
                <p>Badges & Pins</p>
                <p>Corsages</p>
                <p>All Accessories</p>
              </div>
            </div>`;
            dropdown.classList.remove("featured-dropdown");
        } else if (categoryName === "Stationery") {
          content = 
          `
          <div class="dropdownContent">
              <div class="dropdownContentCategories">
                  <div class="r">
                      <p>Paper Products & Stickers</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Notebooks & Calendars</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Writing Utensils & Accessories</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Books & Accessories</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Wedding Accessories</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Photography & Music</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Other Stationery</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
              </div>
          
              <div class="dropdownContentMiddle">
                  <p>Cards & Postcards</p>
                  <p>Washi Tape</p>
                  <p>Stickers</p>
                  <p>Sticky Notes & Notepads</p>
                  <p>Envelopes & Letter Paper</p>
                  <p>Chinese New Year</p>
                  <p>Storage & Gift Boxes</p>
              </div>
          </div>
          `;
          
            dropdown.classList.remove("featured-dropdown");
        } else if (categoryName === "Home & Living") {
          content = 
          `
          <div class="dropdownContent">
              <div class="dropdownContentCategories">
                  <div class="r">
                      <p>Home Décor</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Pitchers & Beverage Holders</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Storage & Organization</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Bedding & Rugs</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Furniture</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Home Appliances</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Cleaning Products</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Other Home & Living Products</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
              </div>
          
              <div class="dropdownContentMiddle">
                  <p>Items for Display</p>
                  <p>Candles & Candle Holders</p>
                  <p>Fragrances</p>
                  <p>Plants</p>
                  <p>Dried Flowers & Bouquets</p>
                  <p>Pottery & Ceramics</p>
                  <p>Posters</p>
                  <p>Customized Portraits</p>
                  <p>Wall Décor</p>
                  <p>Picture Frames</p>
              </div>
          </div>
          `;
          
            dropdown.classList.remove("featured-dropdown");
        } else if (categoryName === "Bags") {
          content = 
          `
          <div class="dropdownContent">
              <div class="dropdownContentCategories">
                  <div class="r">
                      <p>Everyday Bags</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Wallets</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Laptop Bags & Briefcases</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Travel & Luggage</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Other Bags</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
              </div>
          
              <div class="dropdownContentMiddle">
                  <p>Messenger Bags & Sling Bags</p>
                  <p>Handbags & Totes</p>
                  <p>Backpacks</p>
                  <p>Drawstring Bags</p>
                  <p>Clutch Bags</p>
              </div>
          </div>
          `;
          
            dropdown.classList.remove("featured-dropdown");
        } else if (categoryName === "Clothing") {
          content = 
          `
          <div class="dropdownContent">
              <div class="dropdownContentCategories">
                  <div class="r">
                      <p>Women's Tops</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Women's Bottoms</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Women's Outerwear</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Men's Tops</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Men's Bottoms</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Unisex Clothing</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Loungewear & Underwear</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Other Clothing</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
              </div>
          
              <div class="dropdownContentMiddle">
                  <p>Women's Underwear</p>
                  <p>Men's Underwear</p>
                  <p>Loungewear & Sleepwear</p>
              </div>
          </div>
          `;
          
            dropdown.classList.remove("featured-dropdown");
        }else if(categoryName === "All Categories"){
          content = 
          `
          <div class="dropdownContent">
              <div class="dropdownContentCategories">
                  <div class="r">
                      <p>Accessories</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Stationery</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Bags</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Shoes & Socks</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Clothing</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Home & Living</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Kitchen & Dining</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Food & Drink</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Beauty & Personal Care</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Recreation & Leisure</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Baby & Kids</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Electronics</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Pet Supplies</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>DIY Materials</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="r">
                      <p>Workshops</p>
                      <i class="fas fa-arrow-right"></i>
                  </div>
              </div>
          </div>
          `;
          
          dropdown.classList.remove("featured-dropdown");
        }
            


       
        dropdown.innerHTML = content;
    });
});

