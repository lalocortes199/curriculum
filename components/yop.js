export default function yop  (usuario, contenedor) {
    contenedor.innerHTML =  `
    <h1 class="firstname">${usuario.nombre}</h1>
    <h1 class="lastname">${usuario.apellido}</h1>
    <p class="position">${usuario.cargo}</p>`;
};