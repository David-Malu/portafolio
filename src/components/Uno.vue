<template>
  <div>
    <div
      class="container-fluid"
      style="font-family: Arial, Helvetica, sans-serif"
    >
      <div class="row" id="coluno">
        <div class="col-sm-1"></div>
        <div class="col-sm-2 d-flex align-items-center justify-content-center">
          <img
            src="/imagenes/perfil.jpg"
            alt="Descripción de la imagen"
            class="img"
          />
        </div>
        <div class="col-sm-3" style="margin-top: 120px">
          <span style="font-size: 20px">Hola, mi nombre es : </span>
          <br />
          <span style="color: #3299ec; font-size: 30px"
            >Jose David Maluendas Lizarazo.</span
          >
          <br />
          <br />
          <span style="color: grey; font-size: 15px"
            >! Que gusto que estes aqui ¡</span
          >
        </div>

        <div class="col-sm-5">
          <div class="cardu">
            <a
              class="socialContainer containerThree"
              href="https://www.linkedin.com/in/david-maluendas-1b3003276/"
              target="_blank"
            >
              <svg viewBox="0 0 448 512" class="socialSvg linkdinSvg">
                <path
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>
            <a
              class="socialContainer containerFour"
              href="https://wa.me/3134841675"
              target="_blank"
            >
              <svg viewBox="0 0 16 16" class="socialSvg whatsappSvg">
                <path
                  d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                ></path>
              </svg>
            </a>

            <a
              class="socialContainer containerFive"
              href="https://github.com/David-Malu"
              target="_blank"
            >
              <svg viewBox="0 0 16 16" class="socialSvg githubSvg">
                <path
                  fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="col-sm-1"></div>
      </div>

      <div class="row" id="coldos">
        <div class="col-sm-1"></div>

        <div class="col-sm-10 mt-5">
          <h3>Sobre Mi<span class="punto">.</span></h3>

          <th>
            Desarrollador apasionado con conocimientos en JavaScript, HTML, CSS,
            Node.js y bases de datos no relacionales, incluyendo MongoDB. Soy
            competente en el uso de frameworks como Vue.js y bibliotecas como
            Quasar y Bootstrap. Además, tengo habilidades en el control de
            versiones con Git.
          </th>
          <!-- <router-link to="/dos">
            <button>ir a componente dos</button>
          </router-link> -->
          <div class="row mt-4">
            <div class="col-sm-4">
              <h6>Correo<span class="punto2">.</span></h6>
              <img id="imagen" src="/imagenes/gmail.svg" alt="" />
              <span style="font-size: 20px"> vidjose017@gmail.com </span>
            </div>
            <div class="col-sm-8">
              <h6>Herramientas<span class="punto2">.</span></h6>
              <img id="imagen" src="/imagenes/vue.svg" alt="" />
              <img id="imagen" src="/imagenes/css.svg" alt="" />
              <img id="imagen" src="/imagenes/html.svg" alt="" />
              <img id="imagen" src="/imagenes/js.svg" alt="" />
              <img id="imagen" src="/imagenes/git.svg" alt="" />
              <img id="imagen" src="/imagenes/github.svg" alt="" />
              <img id="imagen" src="/imagenes/node.svg" alt="" />
              <!-- <img id="imagen" src="/imagenes/quasar.svg" alt=""> -->
              <img id="imagen" src="/imagenes/mongo.svg" alt="" />
              <img id="imagen" src="/imagenes/btp.svg" alt="" />
              <img id="imagen" src="/imagenes/npm.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="col-sm-1"></div>
      </div>
      <div class="row">
        <div class="col-sm-12" style="background-color: #050e1d; color: white">
          <h2 id="centrar" style="margin-top: 40px">
            Proyectos<span class="punto2">.</span>
          </h2>
        </div>
      </div>

      <div class="row" id="coltres">
        <div class="col-sm-1"></div>
        <div class="col-sm-10">
          <div class="d-flex flex-wrap justify-content-around">
            <div
              class="card"
              style="
                width: 18rem;
                margin-top: 30px;
                height: 270px;
                background-color: #0a1e49;
              "
            >
              <img
                src="/imagenes/veterinaria.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body" style="height: 23px">
                <h5 class="card-title" style="color: rgb(0, 153, 241)">
                  Veterinaria.
                </h5>
              </div>

              <div class="card-body">
                <div class="row">
                  <div class="col-sm-6">
                    <a
                      href="https://github.com/David-Malu/veterinaria" target="_blank"
                      class="btn btn-outline-info btn-hover-none d-flex align-items-center justify-content-center"
                      style="color: aqua"
                    >
                      Code
                      <i
                        class="fab fa-github ml-2"
                        style="font-size: 24px; color: aqua; margin-left: 10px"
                      ></i>
                    </a>
                  </div>
                  <div class="col-sm-6">
                    <a
                      href="https://veeterinaria.netlify.app/" target="_blank"
                      class="btn btn-outline-warning d-flex align-items-center justify-content-center"
                    >
                      visitar
                      <i
                        style="font-size: 17px; margin-left: 10px"
                        class="fa-regular fa-eye"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card"
              style="
                width: 18rem;
                margin-top: 30px;
                height: 270px;
                background-color: #0a1e49;
              "
            >
              <img src="/imagenes/pokeApi.png" class="card-img-top" alt="..." />

              <div class="card-body" style="height: 23px">
                <h5 class="card-title" style="color: rgb(0, 153, 241)">
                  PokeApi.
                </h5>
              </div>

              <div class="card-body">
                <div class="row">
                  <div class="col-sm-6">
                    <a
                      href="https://github.com/David-Malu/pokeapi" target="_blank"
                      class="btn btn-outline-info btn-hover-none d-flex align-items-center justify-content-center"
                      style="color: aqua"
                    >
                      Code
                      <i
                        class="fab fa-github ml-2"
                        style="font-size: 24px; color: aqua; margin-left: 10px"
                      ></i>
                    </a>
                  </div>
                  <div class="col-sm-6">
                    <a
                      href="https://poquemon.netlify.app/#/"  target="_blank"
                      class="btn btn-outline-warning d-flex align-items-center justify-content-center"
                    >
                      visitar
                      <i
                        style="font-size: 17px; margin-left: 10px"
                        class="fa-regular fa-eye"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card"
              style="
                width: 18rem;
                margin-top: 30px;
                height: 270px;
                background-color: #0a1e49;
              "
            >
              <img src="/imagenes/rifaa.png" class="card-img-top" alt="..." />
              <div class="card-body" style="height: 23px">
                <h5 class="card-title" style="color: rgb(0, 153, 241)">
                  Rifa.
                </h5>
              </div>

              <div class="card-body">
                <div class="row">
                  <div class="col-sm-6">
                    <a
                      href="https://github.com/David-Malu/Rifa" target="_blank"
                      class="btn btn-outline-info btn-hover-none d-flex align-items-center justify-content-center"
                      style="color: aqua"
                    >
                      Code
                      <i
                        class="fab fa-github ml-2"
                        style="font-size: 24px; color: aqua; margin-left: 10px"
                      ></i>
                    </a>
                  </div>
                  <div class="col-sm-6">
                    <a
                      href="https://rifaonlinee.netlify.app/"   target="_blank"
                      class="btn btn-outline-warning d-flex align-items-center justify-content-center"
                    >
                      visitar
                      <i
                        style="font-size: 17px; margin-left: 10px"
                        class="fa-regular fa-eye"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card"
              style="
                width: 18rem;
                margin-top: 30px;
                height: 270px;
                background-color: #0a1e49;
              "
            >
              <img
                src="/imagenes/calculadora.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body" style="height: 23px">
                <h5 class="card-title" style="color: rgb(0, 153, 241)">
                  Calculadora.
                </h5>
              </div>

              <div class="card-body">
                <div class="row">
                  <div class="col-sm-6">
                    <a
                      href="https://github.com/David-Malu/cal" target="_blank"
                      class="btn btn-outline-info btn-hover-none d-flex align-items-center justify-content-center"
                      style="color: aqua"
                    >
                      Code
                      <i
                        class="fab fa-github ml-2"
                        style="font-size: 24px; color: aqua; margin-left: 10px"
                      ></i>
                    </a>
                  </div>
                  <div class="col-sm-6">
                    <a
                      href="https://clculadora.netlify.app/"   target="_blank"
                      class="btn btn-outline-warning d-flex align-items-center justify-content-center"
                    >
                      visitar
                      <i
                        style="font-size: 17px; margin-left: 10px"
                        class="fa-regular fa-eye"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-1"></div>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style scoped>
#coluno {
  background-color: #050e1d;
  color: #e7e7e7;
  min-height: 400px;
}

#coldos {
  background-color: #071739;
  color: #e7e7e7;
  min-height: 400px;
}

#coltres {
  background-color: #050e1d;
  color: #e7e7e7;
  min-height: 400px;
}

.img {
  height: 200px;
  width: 200px;
  border-radius: 10%;
  border: 6px solid rgb(20, 154, 231); /* Ajusta el grosor y el color del borde según sea necesario */
}

.punto {
  color: rgb(20, 154, 231);
  font-size: 100px;
}
.punto2 {
  color: rgb(20, 154, 231);
  font-size: 70px;
}
.cardu {
  margin-top: 230px;
  width: fit-content;
  height: fit-content;
  background-color: #050e1d;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 25px;
  gap: 20px;
  border: none;
  flex-direction: row;
}

/* for all social containers*/
.socialContainer {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: rgb(44, 44, 44);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition-duration: 0.3s;
}
/* instagram*/
.containerOne:hover {
  background-color: #d62976;
  transition-duration: 0.3s;
}
/* twitter*/
.containerTwo:hover {
  background-color: #00acee;
  transition-duration: 0.3s;
}
/* linkdin*/
.containerThree:hover {
  background-color: #0072b1;
  transition-duration: 0.3s;
}
/* Whatsapp*/
.containerFour:hover {
  background-color: #019133;
  transition-duration: 0.3s;
}
.containerFive:hover {
  background-color: grey; /* Cambia el color de fondo al pasar el mouse */
  transition-duration: 0.3s;
}

/* Agrega otros estilos según sea necesario */

.socialContainer:active {
  transform: scale(0.9);
  transition-duration: 0.3s;
}

.socialSvg {
  width: 17px;
}

.socialSvg path {
  fill: rgb(255, 255, 255);
}

.socialContainer:hover .socialSvg {
  animation: slide-in-top 0.3s both;
}

@keyframes slide-in-top {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

#imagen {
  height: 60px;
  width: 60px;
  margin-right: 20px;
}
#centrar {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-hover-none:hover {
  background-color: transparent !important;
}

.card-img-top {
  transition: filter 0.3s ease; /* Agrega transición para suavizar el efecto */
}

.card-img-top:hover {
  filter: brightness(
    30%
  ); /* Aplica un filtro de brillo para oscurecer la imagen */
}




/* Ajustes para texto dependiendo del tamaño de la pantalla */
@media screen and (max-width: 1136px) {
  .col-sm-3 {
    margin-top: 0; /* Eliminar el margen superior */
    margin-left: 20px; /* Añadir un margen izquierdo */
  }
}

@media screen and (max-width: 568px) {
  .col-sm-3 {
    margin-top: 20px; /* Agregar margen superior */
    margin-left: 0; /* Eliminar el margen izquierdo */
  }}
</style>
