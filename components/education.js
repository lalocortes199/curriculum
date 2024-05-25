export default function education (usuario, contenedor) {
    contenedor.innerHTML =  usuario.educacion.map((edu) =>{
    return`
    <div class="course">
    <h2 class="education-title">${edu.especialidad}</h2>
    <h5 class="college-name">${edu.institucion}</h5>
    <p class="education-date">${edu.año}</p>
</div>
    `
   }).join('')
};
