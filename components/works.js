export default function works (usuario, contenedor) {
    contenedor.innerHTML =  usuario.trabajos.map((trab) =>{
        return `
        <div class="work">
        <div class="job-date">
        <p class="job">${trab.puesto}</p>
        <p class="date">${trab.tiempolaburando}</p>
        </div>
    <h2 class="company-name">${trab.empresa}</p>
    </div></h2>
    <p class="work-text">${trab.descripcion}</p>
</div>
<hr>`}).join('')
};