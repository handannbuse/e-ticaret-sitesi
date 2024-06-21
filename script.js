searchBox= document.querySelector('.from-box');

document.querySelector('#search-btn').onclick = () =>{
    searchBox.classList.toggle('active');
}







window.onscroll= ()=> {

    searchBox.classList.remove('active') ;

    if(window.scrollY>80) {

        document.querySelector('.header .header-2').classList.add('active');

    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');

    }
}

window.onload = () => {
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');

    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

/* ---- giriş form ---- */

var loginform=document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginform.classList.toggle('active');

}
document.querySelector('#close-login-btn').onclick= () =>{
    loginform.classList.remove('active');

    
}

/* swiper ---- */
var swiper = new Swiper(".kitap-listesi", {
   loop:true,
   centeredSlides:true,
   autoplay:{
    delay:9500,
    disableOnInteraction:false,

    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween:10,
     
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      
      },
      
      
    },
  });

/* featured ---- */

var swiper = new Swiper(".featured-slider", {

  spaceBetween:10,
  loop:true,
  centeredSlides:true,
  autoplay:{
   delay:9500,
   disableOnInteraction:false,

   },
   navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
   },
   
   breakpoints: {
     "@0.00": {
       slidesPerView: 1,

   
     },
     "@0.75": {
       slidesPerView: 2,

     
     },
     "@1.00": {
       slidesPerView: 3,
 
     
     },
     "@1.50": {
      slidesPerView: 4,
  
    }, 
     
     
   },
 });


 /*---- arrivals start*/


 var swiper = new Swiper(".arrivals-slider", {
  spaceBetween:10,
  loop:true,
  centeredSlides:true,
  autoplay:{
   delay:9500,
   disableOnInteraction:false,

   },
   breakpoints: {
     "@0.00": {
       slidesPerView: 1,
       spaceBetween:10,
    
     },
     "@0.75": {
       slidesPerView: 2,
       spaceBetween: 20,
     
     },
     "@1.00": {
       slidesPerView: 3,
       spaceBetween: 40,
     
     },
     
     
   },
 });


  /*---- reviews start*/

  var swiper = new Swiper(".reviews-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
     delay:9500,
     disableOnInteraction:false,
  
     },
     breakpoints: {
       "@0.00": {
         slidesPerView: 1,
         spaceBetween:10,
      
       },
       "@0.75": {
         slidesPerView: 2,
         spaceBetween: 20,
       
       },
       "@1.00": {
         slidesPerView: 3,
         spaceBetween: 40,
       
       },
       
       
     },
   });

    /*-------- blog section start ---------- */

    var swiper = new Swiper(".blog-slider", {
      spaceBetween: 10,
      loop:true,
      centeredSlides:true,
      autoplay:{
          delay:9500,
          disableOnInteraction:false,
      },
      breakpoints: {
       0: {
          slidesPerView: 1,   
        },
        768: {
          slidesPerView: 2, 
        },
        1024: {
          slidesPerView: 3, 
        },
      },
    });
  