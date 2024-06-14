document.addEventListener('DOMContentLoaded', function () {
    navegacionFija()
    crearGaleria()
    scrollNaav()
})
function navegacionFija() {
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')
    //escuchar por el scroll
    document.addEventListener('scroll', function () {
        if (sobreFestival.getBoundingClientRect().bottom < 1) {//cuando slo pasa los numero son negativos
            header.classList.add('fixed')
        } else {
            header.classList.remove('fixed')
        }
    })
}
function crearGaleria() {
    const CANTIDAD_IMAGENES = 16;
    const galeria = document.querySelector('.galeria-imagenes')
    for (let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/gallery/thumb/${i}.jpg`
        imagen.alt = 'Imagen Galeria'
        //event handler, evento para responder a un evento de un usuario
        imagen.onclick = function () {
            mostrarImagen(i)
        }
        galeria.appendChild(imagen)
    }
}
function mostrarImagen(i) {
    const imagen = document.createElement('IMG');
    imagen.src = `src/img/gallery/full/${i}.jpg`
    imagen.alt = 'Imagen Galeria'
    //generar modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal
    modal.appendChild(imagen)
    //boton cerrar modal
    const cerrarBoton = document.createElement('BUTTON')
    cerrarBoton.textContent = 'X'
    cerrarBoton.classList.add('btn-cerrar')
    cerrarBoton.onclick = cerrarModal
    modal.appendChild(cerrarBoton)
    //agregar el modal
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)
}
function cerrarModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('salida')//añades la clase antes de cerrar
    setTimeout(() => {
        modal?.remove();
        const body = document.querySelector('body')//una vez usado remueves el overflow
        body.classList.remove('overflow-hidden')
    }, 500);

}
function scrollNaav() {
    const navlinks = document.querySelectorAll('.navegacion-principal a')
    navlinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)
            section.scrollIntoView({ behavior: 'smooth' })
        })
    })
}