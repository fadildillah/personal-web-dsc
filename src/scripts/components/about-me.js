import aboutPhoto from "../../assets/about.jpg";

class AboutMe extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container-fluid about__me py-5 px-3">
            <div class="row justify-content-md-center text-justify">
                <div class="col col-sm-6 col-12">
                    <div class="d-flex flex-column mx-md-2">
                        <h2 class="display-4 text-center">About Me</h2>
                        <p class="lead my-md-3 mx-md-3">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam quasi at laboriosam soluta dolorum dicta sed sit neque officia quam dolor, libero hic impedit quos maiores repudiandae quod ipsam labore?
                            Quos rem maiores dolor ea quis adipisci animi dolore voluptate unde autem aspernatur beatae doloremque iusto dolores deserunt quaerat perspiciatis non ab sapiente, sed earum vitae? Eos ex soluta quibusdam.
                        </p> 
                    </div>
                </div>
                <div class="col col-md-5 about__photo align-self-md-center">
                    <img src="${aboutPhoto}" alt="Gambar anjing dengan laptop" class="img-fluid rounded">
                </div>
            </div>
        </div>
    `;
  }
}

customElements.define("about-me", AboutMe);
