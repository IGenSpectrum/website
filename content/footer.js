const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <p>
  (c) IGenSpectrum 2021. We are a student group acting independently of the University of California. We take full responsibility for our organization and this web site.
  </p>
  <a href="https://www.ocf.berkeley.edu">
  <img src="/img/ocf-hosted-penguin.svg" alt="Hosted by the OCF"></img>
  </a>
`;


class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(footerTemplate.content.cloneNode(true));
    this.id="footer";
  }
}

customElements.define('footer-component', Footer);
