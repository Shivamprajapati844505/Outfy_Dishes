document.getElementById("playBtn").addEventListener("click", () => {
  const wrappers = document.querySelectorAll(".image-wrapper");
  const container = document.querySelector(".container");
  const logo = document.querySelector(".logo");
  const music = document.getElementById("bgMusic");

  let tl = gsap.timeline();

  
  music.play();

  // Hide play button
  tl.to("#playBtn", {  
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      document.getElementById("playBtn").style.display = "none";
    }
  });

  

wrappers.forEach((wrap) => {
  const img = wrap.querySelector("img");


  const blurBg = img.cloneNode(true);
  blurBg.classList.add("blur-bg");
  wrap.appendChild(blurBg);

  gsap.set(blurBg, {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "blur(20px)",
    zIndex: -1
  });

  // Foreground image settings
  gsap.set(img, { filter: "blur(10px)", scale: 0.8 });

  tl.to(wrap, { opacity: 1, duration: 0.5 }) // fade-in
    .to(img, {
      scale: 1.8,
      filter: "blur(0px)",
      duration: 1.5,
      ease: "power2.out"
    })
    .to(wrap, { duration: 1 }) 
    .to(wrap, { opacity: 0, duration: 0.8, ease: "power1.in" });
});



 
  tl.to(container, {
    backgroundColor: "transparent",
    duration: 0.8,
    ease: "power2.inOut"
  });

  // Logo move to center
  tl.to(".logo", {
    x: container.offsetWidth / 2 - logo.offsetWidth / 2 - logo.offsetLeft,
    y: container.offsetHeight / 2 - logo.offsetHeight / 2 - logo.offsetTop,
    scale: 1.1,
    duration: 1.2,
    ease: "power2.inOut"
  });
});
