class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white px-lg-5">
                <a class="navbar-brand d-flex align-items-center" href="#">
                  <span class="font-weight-bold">Muhammad Fadillah</span>
                </a>
                
                <div class="collapse navbar-collapse float-end" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="#about">About Me</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#education">Education</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#project">Projects</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#skills">Skills</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
            </nav>
        `;
  }
}

customElements.define("app-bar", AppBar);
