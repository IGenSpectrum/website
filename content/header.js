const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <div id=logo onclick="location.href='/';">
    <img src="img/logo.svg"></img>
    <div id=name>
        IGenSpectrum
    </div>
  </div>
  <nav class=MenuContainer role="navigation">
    <button id="hamburger" onclick="toggleMenu.call()" aria-expanded="false">
      <i class="fas fa-bars" aria-hidden="true"></i>
      <span>Menu</span>
    </button>
    <ul id="menu">
      <li class=button ><a href="#home" onclick="return toggleMenu.call()">Home</a></li>
      <li class=button ><a href="#about" onclick="return toggleMenu.call()">About</a></li>
      <li class=button ><a href="#calendar" onclick="return toggleMenu.call()">Calendar</a></li>
      <li class=button ><a href="#resources" onclick="return toggleMenu.call()">Resources</a></li>
      <li class=button ><a href="#contact" onclick="return toggleMenu.call()">Join+Contact</a></li>
      <div class=mouse-listener onclick="toggleMenu.call()" ></div>
    </ul>
  </nav>
`;
//  <div class=OCF>
//    <a href="https://www.ocf.berkeley.edu">
//    <img src="/img/ocf-hosted-penguin.svg" alt="Hosted by the OCF"></img>
//    </a>
//  </div>

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(headerTemplate.content.cloneNode(true));
    this.id="site-header";
  }
}

customElements.define('header-component', Header);

function toggleMenu(){
  const menu = document.getElementById("menu");
  menu.classList.toggle("visible");
  const hamburger = document.getElementById("hamburger");
  let exp = hamburger.getAttribute('aria-expanded')
  console.log(exp)
  hamburger.setAttribute('aria-expanded',exp==="true"? "false" : "true");
}
