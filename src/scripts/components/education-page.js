import upnLogo from "../../assets/upnvj.png";

class EducationPage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="container-fluid py-3 px-3">
                <h2 class="display-4 ps-md-5 my-4">Education</h2>
                <div class="row py-3">
                    <div class="col-4 px-3">
                        <img src="${upnLogo}" class="img-fluid mx-auto d-block" width="125" height="125" alt="UPN Veteran Jakarta">
                    </div>

                    <div class="col-8 px-3">
                        <h4 class="fw-bold">UPN Veteran Jakarta</h4>
                        <p class="lead">S1 Informatika - Fakultas Ilmu Komputer</p>
                        <p>2018 - Present</p>
                    </div>
                </div>

                <div class="row py-3">
                    <div class="col-4 px-3">
                        <img src="${upnLogo}" class="img-fluid mx-auto d-block" width="125" height="125" alt="UPN Veteran Jakarta">
                    </div>

                    <div class="col-8 px-3">
                        <h4 class="fw-bold">UPN Veteran Jakarta</h4>
                        <p class="lead">S1 Informatika - Fakultas Ilmu Komputer</p>
                        <p>2018 - Present</p>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define("education-page", EducationPage);