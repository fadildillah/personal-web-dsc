import imgProject from "../../assets/project.jpg";

class ProjectPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container py-sm-5">
            <h2 class="display-4 text-end">Projects</h2>
            <div class="row justifiy-content-md-center my-sm-3">
                <div class="col col-sm-6 col-12">
                    <div class="card mb-3">
                        <img class="card-img-top" src="${imgProject}" alt="Card image cap">

                        <div class="card-body">
                            <h5 class="card-title font-weight-bold">Nama Project</h5>
                            <p class="card-text">Sedikit deskripsi tentang apaa yang kalian buat di project ini</p>
                            <a class="card-text" href="https://google.com" target="_blank">
                                <i class="bi bi-link-45deg style="font-size: 1rem; color: black;"></i>
                                Visit Website
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col col-sm-6 col-12">
                    <div class="card mb-3">
                        <img class="card-img-top" src="${imgProject}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold">Nama Project</h5>
                            <p class="card-text">Sedikit deskripsi tentang apaa yang kalian buat di project ini</p>
                            <a class="card-text" href="https://google.com" target="_blank">
                                <i class="bi bi-link-45deg style="font-size: 1rem; color: black;"></i>
                                Visit Website
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  }
}

customElements.define("project-page", ProjectPage);
