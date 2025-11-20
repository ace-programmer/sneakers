const cart = document.getElementById("cart");
const shop = document.getElementById("shop");
const overlay = document.getElementById("overlay");
const mainImg = document.getElementById("main_img");
const overlayClose = document.getElementById("overlay_close");
const product__price = document.getElementById("product__price");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const count = document.getElementById("count");
const shopList = document.getElementById("shop__list");
const addBtn = document.getElementById("addBtn");
const prTitle = document.querySelector(".product__title");
const shopEmpty = document.querySelector(".shop__bottom--empty");
const mainPic = document.getElementById("main__picture");
const miniPics = document.querySelectorAll(".mini_pictures");
const fleft = document.getElementById("full__left");
const fright = document.getElementById("full__right");
const fullImg = document.getElementById("full_img");
const shopCount = document.getElementById("shopCount");
const fullMini = document.querySelectorAll(".fullMini");
const shopBtn = document.querySelector(".shopBtn");
const menu = document.getElementById('menu')
const modal = document.getElementById('modal')
const menuClose = document.getElementById('menu__close')
const mright = document.getElementById("main__right");
const mleft = document.getElementById("main__left");
const user = document.getElementById("user");
const profileClose = document.getElementById("profile__close");
const profileModal = document.getElementById("profile__modal");


cart.addEventListener("click", (e) => {
  e.stopPropagation();
  shop.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (
    !cart.contains(e.target) &&
    !shop.contains(e.target) &&
    e.target !== addBtn
  ) {
    shop.classList.remove("active");
  }
});

mainImg.addEventListener("click", () => {
  if(window.innerWidth>475){
    overlay.classList.add("show");
  }
});

overlayClose.addEventListener("click", () => {
  overlay.classList.remove("show");
});

fullMini.forEach((mini) => {
  mini.addEventListener("click", () => {
    fullMini.forEach((el) => el.parentElement.classList.remove("selected"));
    mini.parentElement.classList.add("selected");
    fullImg.src = mini.src;
  });
});

miniPics.forEach((item, index) => {
  item.addEventListener("click", () => {
    miniPics.forEach((el) => el.parentElement.classList.remove("selected"));
    item.parentElement.classList.add("selected");
    mainPic.src = item.src;
    currentIndex = index;
  });
});

let currentIndex = 0;

fleft.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = miniPics.length - 1; // oxirgi rasmga qaytish
  fullImg.src = miniPics[currentIndex].src;
});

fright.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= miniPics.length) currentIndex = 0; // birinchi rasmga qaytish
  fullImg.src = miniPics[currentIndex].src;
});

let itemCount = 1;

plus.addEventListener("click", () => {
  if (itemCount < 10) {
    itemCount++;
    count.textContent = itemCount;
  } else {
    alert("Maxsulot qolmadi");
  }
});

minus.addEventListener("click", () => {
  if (itemCount > 0) {
    itemCount--;
    count.textContent = itemCount;
  } else {
    alert("Maxsulot tugadi");
  }
});

addBtn.addEventListener("click", () => {
  shop.classList.add("active");
  shopEmpty.classList.add("hide");
  shopBtn.classList.add("del");
  shopCount.classList.add("remo");

  shopList.innerHTML = `<li>
                  <div class="shop__product-img">
                    <img src="./images/img1.png" alt="">
                  </div>
                  <div class="shop__product--info">
                    <h4>${prTitle.textContent}</h4>
                    <p>$${
                      product__price.textContent
                    } x <span class="item__count">${itemCount}</span> <b class="">$${
    itemCount * Math.floor(product__price.textContent)
  }</b></p>
                  </div>
                  <div class="trash">
                    <img src="./images/trash.svg" alt="">
                  </div>
                </li>`;
  shopCount.textContent = itemCount;
});

shopList.addEventListener("click", (e) => {
  if (e.target.closest(".trash")) {
    e.stopPropagation();
    const li = e.target.closest("li");
    li.remove();
    shopEmpty.classList.remove("hide");
    shopBtn.classList.remove("del");
    shopCount.classList.remove("remo");
  }
});

menu.addEventListener('click',()=>{
  modal.classList.add('show')
})
menuClose.addEventListener('click',()=>{
  modal.classList.remove('show')
})

let mIndex = 0;

mleft.addEventListener("click", () => {
  mIndex--;
  if (mIndex < 0) mIndex = miniPics.length - 1;
  mainPic.src = miniPics[mIndex].src;
});

mright.addEventListener("click", () => {
  mIndex++;
  if (mIndex >= miniPics.length) mIndex = 0;
  mainPic.src = miniPics[mIndex].src;
});


user.addEventListener('click',()=>{
  profileModal.classList.add('show')
})

profileClose.addEventListener('click',()=>{
  profileModal.classList.remove('show')
})