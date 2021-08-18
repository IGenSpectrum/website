const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <div class=NameContainer onclick="location.href='/';">
    <div class=Logo>
      <img src="/img/logo.svg"></img>
    </div>
    <div class=Name>
        IGenSpectrum
    </div>
  </div>
  <nav class=MenuContainer role="navigation">
    <button class=Hamburger id="Hamburger" onclick="toggleMenu.call()" aria-expanded="false">
      <i class="fas fa-bars" aria-hidden="true"></i>
      <span>Menu</span>
    </button>
    <ul class=Menu id="Menu">
      <li class=Button ><a href="#home" onclick="return toggleMenu.call()">Home</a></li>
      <li class=Button ><a href="#about" onclick="return toggleMenu.call()">About</a></li>
      <li class=Button ><a href="#calendar" onclick="return toggleMenu.call()">Calendar</a></li>
      <li class=Button ><a href="#resources" onclick="return toggleMenu.call()">Resources</a></li>
      <li class=Button ><a href="#contact" onclick="return toggleMenu.call()">Join+Contact</a></li>
      <div class=MouseListener onclick="toggleMenu.call()" ></div>
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
    this.className="TitleBox";
  }
}

customElements.define('header-component', Header);

function toggleMenu(){
  const menu = document.getElementById("Menu");
  menu.classList.toggle("Visible");
  const hamburger = document.getElementById("Hamburger");
  let exp = hamburger.getAttribute('aria-expanded')
  console.log(exp)
  hamburger.setAttribute('aria-expanded',exp==="true"? "false" : "true");
}
