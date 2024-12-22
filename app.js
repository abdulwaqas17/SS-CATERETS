// -------- starter -------
function starter() {
  var menuFoods = document.querySelector(".menu-foods"); //(id='starter') food-row k ander id thi but onclick lagaya to id remove kr di sab k ander se
  menuFoods.innerHTML = `
    
    <h1 class="heading center">
            Starter Items
    </h1>
    
    <div class="food-row flex">


              <!-- Row-1 -->
              <!-- Box-1 -->
              <div class="food-box flex">

                <div class="product">
                  <img src="https://www.teaforturmeric.com/wp-content/uploads/2022/04/Dahi-Bhalla-06.jpg" alt="starter">
                </div>

                <div class="detail">

                  <h2>Dahi Bhallay</h2>
                  <p>Flavors that unite, hearts that excite.</p>
                  <button class="btn">Book Now</button>

                </div>

              </div>



              <!-- Box-2 -->
              <div class="food-box flex">

                <div class="product">
                  <img
                    src="https://img.sunset02.com/sites/default/files/image/recipes/su/12/09/vegetable-fruit-salad-pachadi-su-x.jpg"
                    alt="starter">
                </div>

                <div class="detail">

                  <h2>Fruit Bites</h2>
                  <p>Flavors that unite, hearts that excite.</p>
                  <button class="btn">Book Now</button>

                </div>

              </div>


              <!-- Row-2 Reverse -->
              <!-- Box-3 -->
              <div class="food-box flex R-reverse">

                <div class="product">
                  <img
                    src="https://img.freepik.com/free-photo/deep-fried-samosas-dumplings-gourmet-appetizer-generated-by-ai_188544-13491.jpg"
                    alt="starter">
                </div>

                <div class="detail">

                  <h2>Samosa</h2>
                  <p>Flavors that unite, hearts that excite.</p>
                  <button class="btn">Book Now</button>

                </div>

              </div>



              <!-- Box-4 -->
              <div class="food-box flex R-reverse">

                <div class="product">
                  <img
                    src="https://www.shutterstock.com/image-photo/chicken-meatballs-glaze-on-black-600nw-1023385783.jpg"
                    alt="starter">
                </div>

                <div class="detail">

                  <h2>Meatballs</h2>
                  <p>Flavors that unite, hearts that excite.</p>
                  <button class="btn">Book Now</button>

                </div>

              </div>

            </div>`;
}

// -------- mainDishes -------
function mainDishes() {
  var menuFoods = document.querySelector(".menu-foods");
  menuFoods.innerHTML = `
    
    <h1 class="heading center">
       Main Dishes
    </h1>
    
    <div class="food-row flex">


              <!-- Row-1 -->
              <!-- Box-1 -->
              <div class="food-box flex">

                <div class="product">
                  <img src="./assets/biryani.jpg" alt="main-dishes">
                </div>

                <div class="detail">

                  <h2>Special Biryani</h2>
                  <p>Deliciously crafted dishes to delight your senses</p>
                  <button class="btn">Book Now</button>

                </div>

              </div>



              <!-- Box-2 -->
              <div class="food-box flex">

                <div class="product">
                  <img src="./assets/korma.png" alt="main-dishes">
                </div>

                <div class="detail">

                  <h2>Korma</h2>
                  <p>Deliciously crafted dishes to delight your senses</p>
                  <button class="btn">Book Now</button>

                </div>

              </div>


              <!-- Row-2 Reverse -->
              <!-- Box-2 -->
              <div class="food-box flex R-reverse">

                <div class="product">
                  <img src="https://kfoods.com/images1/newrecipeicon/lab-e-shireen_284.jpg" alt="main-dishes">
                </div>

                <div class="detail">

                  <h2>Lab-e-Shireen</h2>
                  <p>Deliciously crafted dishes to delight your senses.</p>
                  <button class="btn">Book Now</button>

                </div>

              </div>



              <!-- Box-4 -->
              <div class="food-box flex R-reverse">

                <div class="product">
                  <img src="./assets/bbq.jpg" alt="main-dishes">
                </div>

                <div class="detail">

                  <h2>Bar.B.Q</h2>
                  <p>Deliciously crafted dishes to delight your senses</p>
                  <button class="btn">Book Now</button>

                </div>

              </div>


              <!-- Row-3-->
              <!-- Box-5 -->
              <div class="food-box flex">

                <div class="product">
                  <img src="./assets/fish.jpg" alt="main-dishes">
                </div>

                <div class="detail">

                  <h2>Fish Fry</h2>
                  <p>Deliciously crafted dishes to delight your senses.</p>
                  <button class="btn">Book Now</button>

                </div>

              </div>



              <!-- Box-6 -->
              <div class="food-box flex">

                <div class="product">
                  <img src="https://www.masala.tv/wp-content/uploads/2021/10/KULFA-KHEER-WEB.jpg" alt="main-dishes">
                </div>

                <div class="detail">

                  <h2>Kulfa-Kheer</h2>
                  <p>Deliciously crafted dishes to delight your senses.</p>
                  <button class="btn">Book Now</button>

                </div>

              </div>


            </div>`;
}

// ------- dessert ------
function dessert() {
  var menuFoods = document.querySelector(".menu-foods"); //id="desserts"
  menuFoods.innerHTML = `
    
    <h1 class="heading center" >
         Dessert Foods
    </h1>
    
    <div class="food-row flex">


              <!-- Row-1 -->
              <!-- Box-1 -->
              <div class="food-box flex">

                <div class="product">
                  <img src="./assets/Ice_cream_dessert.jpg" alt="dessert item">
                </div>

                <div class="detail">

                  <h2>Ice Cream</h2>
                  <p>Treat yourself right, with a dessert tonight.</p>
                  <button class="btn">Book Now</button>

                </div>

              </div>



              <!-- Box-2 -->
              <div class="food-box flex">

                <div class="product">
                  <img src="./assets/Sweet-Homemade-Mini-Tarts-with_Fresh-Strawberries-and-Cream-Frosting-dessert.jpg"
                    alt="dessert item">
                </div>

                <div class="detail">

                  <h2>Mini Tarts with Strawberries</h2>
                  <p>Treat yourself right, with a dessert tonight.</p>
                  <button class="btn">Book Now</button>

                </div>

              </div>


              <!-- Row-2 Reverse -->
              <!-- Box-3 -->
              <!-- <div class="food-box flex R-reverse">

                <div class="product">
                  <img src="./assets/kaspas-desserts.jpg" alt="dessert item">
                </div>

                <div class="detail">

                  <h2>kaspas desserts</h2>
                  <p>Treat yourself right, with a dessert tonight.</p>
                  <button class="btn">Book Now</button>

                </div>

              </div> -->



              <!-- Box-4 -->
              <!-- <div class="food-box flex R-reverse">

                <div class="product">
                  <img src="./assets/Pastry-dessert.jpg" alt="dessert item">
                </div>

                <div class="detail">

                  <h2>Pastry</h2>
                  <p>Treat yourself right, with a dessert tonight.</p>
                  <button class="btn">Book Now</button>

                </div>

              </div> -->


              <!-- Row-3-->
              <!-- Box-5 -->
              <div class="food-box flex R-reverse">

                <div class="product">
                  <img src="./assets/Custard-dessert.png" alt="dessert item">
                </div>

                <div class="detail">

                  <h2>Custard</h2>
                  <p>Treat yourself right, with a dessert tonight.</p>
                  <button class="btn">Book Now</button>

                </div>

              </div>



              <!-- Box-6 -->
              <div class="food-box flex R-reverse">

                <div class="product">
                  <img src="./assets/Mango-Gelatin-featured-dessert.jpg" alt="dessert item">
                </div>

                <div class="detail">

                  <h2>Mango-Gelatin</h2>
                  <p>Treat yourself right, with a dessert tonight.</p>
                  <button class="btn">Book Now</button>

                </div>

              </div>


            </div>`;
}

// -------- drink --------
function drink() {
  var menuFoods = document.querySelector(".menu-foods"); //id="desserts"
  menuFoods.innerHTML = `
    
    <h1 class="heading center">
       Cold Drinks
    </h1>
    
    <div class="food-row flex">


              <!-- Row-1 -->
              <!-- Box-1 -->
              <div class="food-box flex">

                <div class="product">
                  <img src="https://static-01.daraz.pk/p/0a0e85478be648cb9761f5fa7af90593.jpg" alt="drinks">
                </div>

                <div class="detail">

                  <h2>Cola Next</h2>
                  <p>Revive, restore, and refresh with every sip.</p>
                  <button class="btn">Book Now</button>

                </div>

              </div>



              <!-- Box-2 -->
              <div class="food-box flex">

                <div class="product">
                  <img src="https://static-01.daraz.pk/p/13f117ec151f9b13c45580da80be2667.jpg" alt="drinks">
                </div>

                <div class="detail">

                  <h2>FIZUP Next</h2>
                  <p>Revive, restore, and refresh with every sip.</p>
                  <button class="btn">Book Now</button>

                </div>

              </div>


              <!-- Row-2 Reverse -->
              <!-- Box-2 -->
              <div class="food-box flex R-reverse">

                <div class="product">
                  <img src="https://i.pinimg.com/736x/72/5f/64/725f64af38fba1e9f984c27518417894.jpg" alt="drinks">
                </div>

                <div class="detail">

                  <h2>Goormet Lemon Up</h2>
                  <p>Revive, restore, and refresh with every sip.</p>
                  <button class="btn">Book Now</button>

                </div>

              </div>



              <!-- Box-4 -->
              <div class="food-box flex R-reverse">

                <div class="product">
                  <img src="https://apnidukan.xyz/wp-content/uploads/2024/05/gourmet-300.jpg" alt="drinks">
                </div>

                <div class="detail">

                  <h2>Gourmet Cola</h2>
                  <p>Revive, restore, and refresh with every sip.</p>
                  <button class="btn">Book Now</button>

                </div>

              </div>


            </div>`;
}

// for add outline when click
var linksUl = document.querySelectorAll(".linksUl a");

linksUl.forEach((a) => {
  // a.classList.remove('clickStyle');
  console.log(a);

  a.addEventListener("click", (e) => {
    // for removing clickStyle for all a
    linksUl.forEach((b) => {
      b.classList.remove("clickStyle");
      console.log(b);
    });

    // for add clickStyle on desire a
    a.classList.add("clickStyle");
  });
});

console.dir(linksUl);

// ------EVENTS For Changing Nav Link Color ------
// var Line = document.querySelector("ul>li>a");
// var homeLink = document.querySelector("#homeLink");
// var aboutLink = document.querySelector("#aboutLink");
// var menuLink = document.querySelector("#menuLink");
// var offerLink = document.querySelector("#offerLink");
// var reservationLink = document.querySelector("#reservationLink");
// var contactLink = document.querySelector("#contactLink");

// homeLink.addEventListener('click', ()=> {

//   homeLink.style.color = " var(--main-color)";
//   Line.style.setProperty('--before-bg', 'green');
//   aboutLink.style.color = "white";
//   menuLink.style.color = "white";
//   offerLink.style.color = "white";
//   reservationLink.style.color = "white";
//   contactLink.style.color = "white";

// });

// aboutLink.addEventListener('click', ()=> {

//   aboutLink.style.color = " var(--main-color)";
//   homeLink.style.color = "white";
//   menuLink.style.color = "white";
//   offerLink.style.color = "white";
//   reservationLink.style.color = "white";
//   contactLink.style.color = "white";

// });

// menuLink.addEventListener('click', ()=> {

//   menuLink.style.color = " var(--main-color)";
//   homeLink.style.color = "white";
//   aboutLink.style.color = "white";
//   offerLink.style.color = "white";
//   reservationLink.style.color = "white";
//   contactLink.style.color = "white";

// });

// offerLink.addEventListener('click', ()=> {

//   offerLink.style.color = " var(--main-color)";
//   homeLink.style.color = "white";
//   aboutLink.style.color = "white";
//   menuLink.style.color = "white";
//   reservationLink.style.color = "white";
//   contactLink.style.color = "white";

// });

// reservationLink.addEventListener('click', ()=> {

//   reservationLink.style.color = " var(--main-color)";
//   homeLink.style.color = "white";
//   aboutLink.style.color = "white";
//   menuLink.style.color = "white";
//   offerLink.style.color = "white";
//   contactLink.style.color = "white";

// });

// contactLink.addEventListener('click', ()=> {

//   contactLink.style.color = " var(--main-color)";
//   homeLink.style.color = "white";
//   aboutLink.style.color = "white";
//   menuLink.style.color = "white";
//   offerLink.style.color = "white";
//   reservationLink.style.color = "white";

// });
