export default function infocontact (usuario, contenedor) {
    contenedor.innerHTML = `<h2 class="title">Contactame</h2>
    <div class="contact-list">
        <div class="contact-text">
            <p>${usuario.direccion}</p>
        </div>
    </div>
    <div class="contact-list">
        <div class="contact-text">
            <p>${usuario.telefono}</p>
        </div>
    </div>
    <div class="contact-list">
        <div class="contact-text">
            <p>${usuario.correo}</p>
        </div>
    </div>
    <div class="contact-list">
        <div class="contact-text">
            <p>${usuario.redes}</p>
        </div>
    </div>`;
};