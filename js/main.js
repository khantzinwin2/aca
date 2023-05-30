import '../style.scss';
import {removeLoaderUi, showLoaderUi} from "./loader";

let items = [];

showLoaderUi();
fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{
            items = json;
            // console.log(items);
            removeLoaderUi();


        items.forEach(item=>{
            let itemsDiv = document.createElement("div");
            itemsDiv.classList.add("col-lg-4","col-md-6");
            itemsDiv.innerHTML =   `<div class="card items-card mb-4">
        <div class="card-body d-flex flex-column">
            <div class="m-3">
                 <img src="${item.image}" class="items-img" alt="">
            </div>
              <p class="card-title text-truncate fw-bold">${item.title}</p>
              <p class="card-text small">
              ${item.description.substring(0,100)}
              </p>
          <div class="d-flex justify-content-between mt-auto align-items-center">
                <p class=" mb-0 fw-bolder">$ <span class="">100</span></p>           
                <button class="btn btn-outline-primary">
                     <i class="bi bi-cart-plus pe-none"></i>           
                     Add to cart
                </button>
           </div>
        </div>
      </div>`;
            let itemsRow = document.querySelector(".items-row");
            itemsRow.append(itemsDiv)
        })
    })

    const itemsRow = document.querySelector(".items-row");

    itemsRow.addEventListener("click",e=>{
        let currentBtn = e.target;
            if (currentBtn.classList.contains("btn")){
                let currentCard = currentBtn.closest(".items-card");
                let currentImg = currentCard.querySelector(".items-img");
                let newImg = new Image();
                newImg.src = currentImg.src;
                console.log(currentImg.getBoundingClientRect())
                newImg.style.position = "fixed";
                newImg.style.transition = 1 + "s";
                newImg.style.top = currentImg.getBoundingClientRect().top +20 + "px";
                newImg.style.left = currentImg.getBoundingClientRect().left + 20 + "px";
                newImg.style.height = currentImg.getBoundingClientRect().height + "px";
                setTimeout(_=>{
                    let cartIcon = document.querySelector(".cart-icon");
                    let cartBtn = document.querySelector(".add-cart-btn");
                    newImg.style.top = cartIcon.getBoundingClientRect().top + "px";
                    newImg.style.left = cartIcon.getBoundingClientRect().left + "px";
                    newImg.style.height = 0 + "px";
                    newImg.style.zIndex =  5000;
                    newImg.style.transform =  "rotate(360deg)";
                    cartBtn.classList.add("animate__animated","animate__tada")
                    cartBtn.addEventListener("animationend",_=>{
                        cartBtn.classList.remove("animate__animated","animate__tada")
                    })

                },10)
                document.body.append(newImg)
            }






    })
