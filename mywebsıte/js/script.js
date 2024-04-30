const searchForm = document.querySelector(".search-form");
const shoppingform=document.querySelector(".cart-items-container");
const navbarform=document.querySelector(".navbar");

/* BUTTONS */

const searchBtn=document.querySelector("#search-btn");

searchBtn.addEventListener("click",function(){
    searchForm.classList.toggle("active");
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm) ){
            searchForm.classList.remove("active");
        }
    });
});

const shoppingbtn=document.querySelector("#shoppingcart-btn");

shoppingbtn.addEventListener("click",function(){
    shoppingform.classList.toggle("active");
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(shoppingbtn)&&!e.composedPath().includes(shoppingform)){
            shoppingform.classList.remove("active");
        }
    });
});

const navbarbtn=document.querySelector("#menu-btn");

navbarbtn.addEventListener("click",function(){
    navbarform.classList.toggle("active");
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(navbarbtn)&&!e.composedPath().includes(navbarform)){
            navbarform.classList.remove("active");
        }
    });
})
