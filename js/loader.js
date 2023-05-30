export function showLoaderUi(){
    const loader = document.createElement("div");
    loader.classList.add("loader","animate__animated","animate__fadeIn");
    loader.innerHTML = ` <div class="vh-100 d-flex bg-white fixed-top justify-content-center align-items-center">
    <div class="spinner-border text-primary data-loader" role="status">
      <span class="visually-hidden"></span>
    </div>
  </div>`;
    document.body.append(loader);
}


export function removeLoaderUi(){
    const currentLoaderUi = document.querySelector(".loader");
    currentLoaderUi.classList.replace("animate__fadeIn","animate__fadeOut")
    // setTimeout(_=>currentLoaderUi.remove(),3000)
    // currentLoaderUi.remove();
    currentLoaderUi.addEventListener("animationend",_=>   currentLoaderUi.remove()
    )
}

