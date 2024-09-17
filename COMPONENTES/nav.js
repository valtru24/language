class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            </div>
            <!-- Barra de navegación -->
            <section class="nav" id="nav">
                <nav>
                    <div class="LOGO">
                        <a href="#">
                            <h2>Language learner</h2>
                        </a>
                    </div>

                    <div class="aprender">
                        <a href="#">
                            <img src="IMGS/INICIO/APRENDER.svg" alt="APRENDER">
                            <b>APRENDER</b>
                        </a>
                    </div>

                    <div class="practicar">
                        <a href="practicar.html">
                            <img src="IMGS/INICIO/PRACTICAR.svg" alt="PRACTICAR">
                            PRACTICAR
                        </a>
                    </div>

                    <div class="desafios">
                        <a href="desafios.html">
                            <img src="IMGS/INICIO/DESAFIOS.svg" alt="DESAFIOS">
                            DESAFIOS
                        </a>
                    </div>

                    <div class="perfil">
                        <a href="perfil.html">
                            <img src="IMGS/INICIO/TUPERFIL.svg" alt="TUPERFIL">
                            TU PERFIL
                        </a>
                    </div>
                </nav>
            </section>
        `;
    }
}

customElements.define('header-component', HeaderComponent);