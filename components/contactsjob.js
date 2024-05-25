export default function contactsjob  (usuario, contenedor) {
    contenedor.innerHTML =  usuario.contactosjob.map((contjob) =>{
        return `
        <div>
        <h4 class="name">${contjob.nombre}</h4>
        <p class="company-name">${contjob.puesto}, ${contjob.empresa}</p>
        <div class="phone">
            <div class="phone-text">
                <p>Phone:</p>
                <p>Email:</p>
            </div>
            <div class="phone-number">
                <p>${contjob.telefono}</p>
                <p>${contjob.email}</p>
            </div>
        </div>
    </div>`}).join('')
};