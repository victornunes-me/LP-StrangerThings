

gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

ScrollSmoother.create({
    smooth:2,
    effects: true
 });

 function AnimarLP(){
   
// animaç±oes hero 
 gsap.from(".hero",{
    opacity:0,
    duration:2,
 });

 gsap.from("picture:nth-child(2)",{
    y:200,
    duration:1
 });

  gsap.from("picture:nth-child(1)",{
    y:-80,
    duration:1
 });

//animacoes cidades

gsap.from(".secaoCidade",{
      scrollTrigger: {
         trigger: ".secaoCidade",
         start: "-10% 40%",
         end: "100% 70%",
         scrub:1,
      },
      opacity:0,
      duration:1,
      y: 100,
});

gsap.from(".card",{
    scrollTrigger: {
      trigger: ".cards",
       start: "0 60%",
       end: "50% 70%",
       scrub: 2,
    },
    opacity:0,
    duration:1,
    stagger:0.4,
    filter:"blur(20px)",
    y:30
});

// animacao sessao obrigado

gsap.from(".secaoObrigado ul",{
   scrollTrigger: {
      trigger: ".secaoObrigado ul",
      start: "0 80%",
      end: "100% 70%",
      scrub:3,
      invalidateOnRefresh: true,
   },
   filter:"blur(10px)",
   opacity:0,
   duration:1,
   x: 80,
   stagger: 0.01
});

// animacao footer

gsap.from("footer",{ 
   scrollTrigger: {
      trigger: "footer",
      markers: false,
      start: "40% 80%",
      end: "80% 100%",
      scrub:2,
   },
   opacity:0,
   duration:1,
   y: -200,
});

// Animação texto infinito footer
gsap.fromTo(".textoInfinito h1",
   {
      x:0
   },
   {
      x: "-100%",
      ease: "none",
      duration: 20,
      repeat:-1,
   }
);


// animação de texto por letra
const textos = document.querySelectorAll(".text-split");

textos.forEach((texto)=>{
   const split = SplitText.create(texto, {
   type:"lines, words, chars",
   mask: "lines"
   });

   gsap.from(split.chars,{
   y:40,
   opacity: 0,
   duration:0.2,
   stagger:0.03,
   scrollTrigger:{
      trigger:texto,
      markers:false,
   }});
});

 }

// animacao preloader

const TLpreloader = gsap.timeline();

TLpreloader.to("#preloader path",{
   strokeDashoffset:0,
   duration:1,
   ease: "power1.inOut"
});

TLpreloader.to("#preloader path",{
   fill:"rgb(168,19,19)",
   duration:0.5,
   ease:"power1.inOut",
   onComplete: AnimarLP
});

TLpreloader.to("#preloader",{
   opacity:0,
   pointerEvents:"none",
   duration:0.5,
   ease:"power1.inOut",
   display:"none",
   
});



//teste

