class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            </div>
            <!-- Barra de navegación -->
            <section class="nav" id="nav">
                <nav>
                    <div class="LOGO">
                        <a href="inicio.html">
                            <h2>Language learner</h2>
                        </a>
                    </div>

                    <div class="aprender">
                        <a href="inicio.html">
                            <img src="IMGS/INICIO/APRENDER.svg" alt="APRENDER">
                            <span> APRENDER</span>
                        </a>
                    </div>

                    <div class="practicar">
                        <a href="practicar.html">
                            <img src="IMGS/INICIO/PRACTICAR.svg" alt="PRACTICAR">
                            <span>PRACTICAR</span>
                        </a>
                    </div>

                    <div class="desafios">
                        <a href="desafios.html">
                            <img src="IMGS/INICIO/DESAFIOS.svg" alt="DESAFIOS">
                            <span>DESAFIOS</span>
                            
                        </a>
                    </div>

                    <div class="perfil">
                        <a href="perfil.html">
                            <img src="IMGS/INICIO/TUPERFIL.svg" alt="TUPERFIL">
                            <span>TU PERFIL</span>
                        </a>
                    </div>
                </nav>
            </section>
        `;
    }
}

customElements.define('header-component', HeaderComponent);

const navLinks = document.querySelectorAll('.nav a');
const activeLink = localStorage.getItem('activeLink');

if (activeLink) {
    document.querySelector(`.nav a[href="${activeLink}"]`).classList.add('active');
}

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));

        this.classList.add('active');
        localStorage.setItem('activeLink', this.getAttribute('href'));
    });
});


