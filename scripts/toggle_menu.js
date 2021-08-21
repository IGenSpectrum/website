function toggleMenu(){
  const menu = document.getElementById("menu");
  menu.classList.toggle("visible");
  const hamburger = document.getElementById("hamburger");
  let exp = hamburger.getAttribute('aria-expanded')
  console.log(exp)
  hamburger.setAttribute('aria-expanded',exp==="true"? "false" : "true");
}
