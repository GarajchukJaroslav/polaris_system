const connectButton = document.querySelector('#connected__button')
const disconnectButton = document.querySelector('#disconnected__button')
const connectedDescr = document.querySelector('.connected__descr')
const connectedText = document.querySelector('.connected__text')
const initials = document.querySelector('.initials')
const labelInners = document.querySelectorAll('.label-padding')
const defaultBtns = document.querySelectorAll('.default-btn')
const criticalShine = document.querySelectorAll('.critical-shine')
const transparentBtns = document.querySelectorAll('.transparent-btn')
const successBtns = document.querySelectorAll('.success-shine')
const primaryShine = document.querySelectorAll('.primary-shine')
const plainBtns = document.querySelectorAll('.plain-btn')

connectButton.addEventListener('click', function (){
    connectButton.classList.add('hidden')
    connectedDescr.classList.add('hidden')
    initials.classList.add('hidden')

    disconnectButton.classList.remove('default-btn--selected')
    disconnectButton.classList.remove('hidden')
    connectedText.textContent = 'Account connected'
})

disconnectButton.addEventListener('click', function (){
    disconnectButton.classList.add('hidden')
    connectedDescr.classList.remove('hidden')
    initials.classList.remove('hidden')

    connectButton.classList.remove('primary-shine--selected')
    connectButton.classList.remove('hidden')
    connectedText.textContent = 'No account connected'
})

labelInners.forEach(el => {
    el.addEventListener('click', function(e){
        if(el.closest('.suffix-list')){
            labelInners.forEach(el => el.classList.remove('suffix-label'))
            el.classList.add('suffix-label')
            const labelImgs = el.closest('.suffix-list').querySelectorAll('.check-img')
            labelImgs.forEach(el => el.classList.add('hidden'))
            el.querySelector('.check-img').classList.remove('hidden')
        }
        labelInners.forEach(el => el.classList.remove('label-padding--selected'))
        el.classList.toggle('label-padding--selected')
    })
})

function changeBtns(btns, className){
    btns.forEach(el => {
        el.addEventListener('click', function (){
            btns.forEach(el => el.classList.remove(`${className}`))
            el.classList.add(`${className}`)
        })
    })
}

changeBtns(plainBtns, 'plain-btn--selected')
changeBtns(primaryShine, 'primary-shine--selected')
changeBtns(successBtns, 'success-shine--selected')
changeBtns(transparentBtns, 'transparent-btn--selected')
changeBtns(criticalShine, 'critical-btn--selected')
changeBtns(defaultBtns, 'default-btn--selected')