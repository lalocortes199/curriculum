export default function photo(usuario, contenedor){
    contenedor.innerHTML = `
   <div class="photo-container">
   <img src="${usuario.foto}" alt="">
   </div>`
   }