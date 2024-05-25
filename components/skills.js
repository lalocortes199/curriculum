export default function skills (usuario, contenedor) {
    contenedor.innerHTML =  usuario.habilidades.map((ex) =>{
    return`
    <div class="skill">
    <div class="left-skill">
        <p>${ex.nombre}</p>
    </div>
    <div class="right-skill">
        <div class="outer-layer">
            <div class="inner-layer" style="width: ${ex.valor}%;"></div>
        </div>
    </div>
</div>
    `
   }).join('')
};