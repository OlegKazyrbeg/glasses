const hiTitle = ScrollReveal({
    distance: '50px',
    origin: 'right',
    duration: 1800,
    easing: 'ease',
    delay: 1400,
    reset: false,

})
hiTitle.reveal('.hi__title')

const hiInfo = ScrollReveal({
    distance: '50px',
    origin: 'bottom',
    duration: 1800,
    easing: 'ease',
    delay: 2400,
    reset: false,

})
hiInfo.reveal('.hi__body__info')

const hiBtn = ScrollReveal({
    duration: 1800,
    origin: 'bottom',
    distance: '5px',
    easing: 'ease',
    delay: 4400,
    reset: false,

})
hiBtn.reveal('.hi__btn')

const hdr = ScrollReveal({
    duration: 1800,
    origin: 'top',
    distance: '60px',
    easing: 'ease',
    delay: 0,
    reset: false,
})

hdr.reveal('.header')

const left = ScrollReveal({
    duration: 1000,
    origin: 'left',
    distance: '100px',
    easing: 'ease',
    delay: 400,
    reset: false,

})
hdr.reveal('.left')

const right = ScrollReveal({
    duration: 1000,
    origin: 'right',
    distance: '100px',
    easing: 'ease',
    delay: 400,
    reset: false,

})
hdr.reveal('.right')

// const backhi = ScrollReveal({
//     duration: 1000,
//     origin: 'bottom',
//     distance: '100px',
//     easing: 'ease',
//     delay: 400,
//     reset: false,

// })
// hdr.reveal('.back-hi')

const present = ScrollReveal({
    duration: 1000,
    origin: 'bottom',
    distance: '200px',
    easing: 'ease',
    delay: 800,
    reset: false,

})
hdr.reveal('.present__product')

//modalWindow
let modalBlock = document.getElementById('wrapper__modal');
let btnOpen = document.getElementById('btnOpen');
let btnClose = document.getElementById('btnClose')
let wrapper = document.getElementById('body')

btnOpen.onclick = function(){
    modalBlock.classList.toggle('wrapper__modal__active')
    wrapper.classList.toggle('lock')
}

btnClose.onclick = function(){
    modalBlock.classList.remove('wrapper__modal__active')
    wrapper.classList.remove('lock')
}