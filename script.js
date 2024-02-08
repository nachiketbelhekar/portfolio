Shery.mouseFollower();
Shery.makeMagnet("a");
Shery.makeMagnet("#page1Content h1");

let nav = document.querySelector("#nav");
 let sticky = nav.offsetTop;

 window.addEventListener('scroll', ()=>{
  if(window.scrollY > sticky){
    nav.classList.add('sticky');
  }else{
    nav.classList.remove('sticky');
  }
 });

 let menu = document.querySelector(".navCenter i")
 let full = document.querySelector("#full-scr")
 let flag = 0;
 menu.addEventListener("click", function(){
  if(flag==0){
    full.style.top = 0
    flag = 1;
  }else{
    full.style.top = "-100%"
    flag = 0;
  }
    
 })

// Shery.imageEffect(".navLeft h3",{
//     style:4,
//    debug:true,
//    Gooey:true,
//    })
   
   
//    gsap.to(".heading h1",{
//      y:40,
//      duration:0.9,
//      repeat:-1,
//      yoyo:true
//    })