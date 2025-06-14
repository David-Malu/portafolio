<template>
  <div>
    <div class="container">
      <div class="row custom-profile-row align-items-center">
        <div class="col-md-4 p-0 position-relative">
          <div class="orange-bg"></div>
          <img src="/imagenes/perfil.jpg" alt="Foto de perfil" class="profile-photo">
        </div>
        <div class="col-md-8 px-5 py-4">
          <h3 class="name">Jose David Maluendas</h3>
          <h5 class="title">Desarrollador de Software</h5>
          <p>
            Competente en el desarrollo con tecnologías como Vue.js, HTML, CSS y JavaScript, así como en la creación de
            APIs RESTful con Node.js
            conocimiento en bases de datos.
            Experiencia en el uso de frameworks modernos como Vue.js y bibliotecas como Bootstrap, Quasar y otros
            orientados a la construcción de interfaces dinámicas y eficientes. </p>
          <p>
            Manejo de herramientas de control de versiones como Git.
            Apasionado por la mejora continua y el aprendizaje autodidacta, con capacidad para trabajar en equipo,
            adaptarse a nuevas tecnologías y aportar soluciones eficientes e innovadoras.
          </p>
          <a href="/public/mI_HOJA_DE_VIDA.pdf" class="btn btn-custom" title="Descargar Hoja de Vida" target="_blank"
            rel="noopener noreferrer">
            Descargar CV
          </a>


        </div>
      </div>


      <div class="row my-5">
        <div class="col-12 text-center">
          <h3 class="fw-bold text-uppercase">Algunos de mis proyectos</h3>
          <hr class="mx-auto" style="width: 90%; border-top: 4px solid #d98a55;">
        </div>
      </div>


      <div class="row my-5">
        <div class="col-12 col-md-6 col-lg-3 mb-4">
          <div class="card">
            <img src="/imagenes/pokeApi.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Poke Api </h5>
              <p class="card-text">sitio para ver tus pokemones favoritos , busacr por categorias y ver cada de detalle
                de cada uno , consumiendo la api de pokemones</p>
              <div class="d-grid gap-2">
                <button class="btn color_boton" type="button">Visitar</button>
                <a href="https://github.com/David-Malu/pokeapi" class="btn btn-dark" target="_blank">Ver Código</a>

              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-4">
          <div class="card">
            <img src="/imagenes/veterinaria.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Veterinaria ADMI</h5>
              <p class="card-text">aca tus maxcotas son caninas , puedes llenar los datos del paciente com osu nombre,
                que enfermedad o sintomas presenta entre otras</p>
              <div class="d-grid gap-2">
                <button class="btn color_boton" type="button">Visitar</button>
                <a href="https://github.com/David-Malu/veterinaria" class="btn btn-dark" target="_blank">Ver Código</a>

              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-4">
          <div class="card">
            <img src="/imagenes/calculadora.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Calculadora</h5>
              <p class="card-text">aca podemos observa una calculadora para poder realizar cualquier tipo de operacion ,
                asi como conversiones desde lo mas facil hasta lo mas complicado </p>
              <div class="d-grid gap-2">
                <button class="btn color_boton" type="button">Visitar</button>
                <a href="https://github.com/David-Malu/cal" class="btn btn-dark" target="_blank">Ver Código</a>

              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-4">
          <div class="card">
            <img src="/imagenes/rifaa.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Pag Rifas</h5>
              <p class="card-text">el papel y el lapiz no van mas , aca puedes hacer tus rifas y anotar puestos pero de
                manera mas actualizada sin necesidad de complicarte por anotar </p>
              <div class="d-grid gap-2">
                <button class="btn color_boton " type="button">Visitar</button>
                <a href="https://github.com/David-Malu/Rifa" class="btn btn-dark" target="_blank">Ver Código</a>
              </div>
            </div>
          </div>
        </div>
      </div>




      <hr class="mx-auto" style="width: 90%; border-top: 4px solid #d98a55;">
      <div class="row text-center mt-4 fs-5">

        <div class="col-12 col-md-4 mb-3">
          <p class="mb-1"><strong>Ubicación:</strong></p>
          <p>Socorro / Santander</p>
        </div>
        <div class="col-12 col-md-4 mb-3">
          <p class="mb-1"><strong>Teléfono:</strong></p>
          <p><a href="tel:+573134841675" class="text-decoration-none text-dark">+(57) 313 - 484 - 1675</a></p>
        </div>
        <div class="col-12 col-md-4 mb-3">
          <p class="mb-1"><strong>Correo:</strong></p>
          <p><a href="mailto:vidjose017@gmail.com" class="text-decoration-none text-dark">vidjose017@gmail.com</a></p>
        </div>
      </div>

    </div>






    <!-- Íconos sociales -->
    <div class="social-icons">
      <ul>
        <li>
          <a href="https://github.com/David-Malu" target="_blank" class="github">
            <i class="fab fa-github"></i> <span>GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://wa.me/3134841675" target="_blank" class="whatsapp">
            <i class="fab fa-whatsapp"></i> <span>WhatsApp</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/david-maluendas-1b3003276/" target="_blank" class="linkedin">
            <i class="fab fa-linkedin"></i> <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="mailto:vidjose017@gmail.com" class="gmail">
            <i class="fas fa-envelope"></i> <span>Enviar Correo</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  height: 180px;
  /* o el alto que tú prefieras */
  object-fit: cover;
  width: 100%;
  transition: filter 0.3s ease;
  filter: brightness(70%);
}

.card:hover .card-img-top {
  filter: brightness(100%);
}



.color_boton {
  background-color: #d98a55;
  color: white;
}

.card {
  width: 100%;
}

.custom-profile-row {
  position: relative;
  overflow: hidden;
  background: #fff;
  margin: 40px 0;
}

.orange-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 100%;
  background-color: #d98a55;
  z-index: 0;
}

.profile-photo {
  position: relative;
  z-index: 1;
  width: 80%;
  margin: 40px auto;
  display: block;
  border: 5px solid #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.name {
  font-weight: bold;
}

.title {
  color: #888;
  margin-bottom: 20px;
}


.btn-custom {
  background-color: #d98a55;
  color: white;
  padding: 6px 20px;
  border: none;
  text-decoration: none;
  border-radius: 4px;
}

.btn-custom:hover {
  background-color: #c47a48;
  color: white;
}























/* ========== REDES SOCIALES ========== */
.social-icons {
  position: fixed;
  top: 40%;
  left: 0;
  transform: translateY(-50%);
  z-index: 1000;
}

.social-icons ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.social-icons li {
  margin: 0;
  padding: 0;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #333;
  color: #fff;
  padding: 8px;
  width: 40px;
  height: 40px;
  transition: width 0.3s ease;
  overflow: hidden;
  border-radius: 0 5px 5px 0;
  text-decoration: none;
}

.social-icons a span {
  margin-left: 10px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-size: 14px;
}

.social-icons a i {
  font-size: 18px;
}

.social-icons a:hover {
  width: 160px;
}

.social-icons a:hover span {
  opacity: 1;
}

/* Colores personalizados */
.social-icons .github {
  background-color: #333;
}

.social-icons .whatsapp {
  background-color: #25d366;
}

.social-icons .linkedin {
  background-color: #0077b5;
}

.social-icons .gmail {
  background-color: #d93025;
}

/* ========== RESPONSIVE ========== */
@media (max-width: 768px) {



  /* Redes sociales compactas */
  .social-icons a {
    padding: 6px;
    width: 36px;
    height: 36px;
  }

  .social-icons a span {
    display: none;
  }

  .social-icons a i {
    font-size: 16px;
  }

  .social-icons a:hover {
    width: 36px;
  }
}
</style>
