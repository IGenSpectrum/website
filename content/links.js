const LinkTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <div class=NameContainer >
    <div class=Logo>
      <img src="img/logo.svg"></img>
    </div>
    <div class=Name>
        IGenSpectrum
    </div>
  </div>
  <div class=Menu>
    <div class=Button ><a href="">Home</a></div>
    <div class=Button ><a href="about">About</a></div>
    <div class=Button ><a href="calendar">Calendar</a></div>
    <div class=Button ><a href="resources">Resources</a></div>
    <div class=Button ><a href="contact">Join+Contact</a></div>
  </div>
  <div class=OCF>
    <a href="https://www.ocf.berkeley.edu">
    <img src="img/ocf-hosted-penguin.svg" alt="Hosted by the OCF"></img>
    </a>
  </div>
`;


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
