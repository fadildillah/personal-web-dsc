import profpic from "../../assets/pfp.jpg";

class HeroPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="jumbotron hero__image d-flex flex-column justify-content-center">
            <img src="${profpic}" class="rounded-circle mx-auto d-block" alt="Foto Profil" width="100" height="100">
            <h1 class="display-5 text-center font-weight-bold pt-md-4">Hi!👋 I'm Fadil -</h1>
            <p class="h1 lead text-center font-weight-bold">👨‍💻 Front End Developer</p>
        </div>
    `;
  }
}

customElements.define("hero-page", HeroPage);
