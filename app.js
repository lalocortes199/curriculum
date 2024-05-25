import { usuario } from './components/usuario.js'
import photo from './components/photo.js'
import  infocontact  from './components/infocontact.js'
import education from './components/education.js'
import  skills  from './components/skills.js'
import  yop  from './components/yop.js'
import  works from './components/works.js'
import contactsjob from './components/contactsjob.js'

const $app = document.querySelector('#app')

$app.innerHTML =`   <section class="main-section">
<div class="left-part">
<div id="imgcontain">
</div>
    <div class="contact-container">
        <div id="infocontact"></div>
    </div>

    <div class="education-container">
        <h2 class="title">Educación</h2>
        <div id="education">
        </div>
    </div>

    <div class="skills-container">
        <h2 class="title">habilidades</h2>
        <div id="habilidades"></div>
    </div>
</div>
<div class="right-part">
    <div class="banner">
        <div id="name"></div>
    </div>

    <div class="work-container ">
        <h2 class="title text-left">experiencia de trabajo</h2>
        <div id="works"></div>
    </div>

    <div class="references-container">
        <h2 class="title ">Referencias</h2>
        <div class="references" id="contactsjob">
        </div>
    </div>
</div>
</section>
`

const $photo = document.querySelector('#imgcontain')
const $infocontact = document.querySelector('#infocontact')
const $education = document.querySelector('#education')
const $habilidades = document.querySelector('#habilidades')
const $yop = document.querySelector('#name')
const $works = document.querySelector('#works')
const $contactjob = document.querySelector('#contactsjob')


photo(usuario, $photo)
infocontact(usuario, $infocontact)
education(usuario, $education)  
skills(usuario, $habilidades)
yop(usuario, $yop)
works(usuario, $works)  
contactsjob(usuario, $contactjob)  
