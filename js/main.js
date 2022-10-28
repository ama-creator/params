// sidebar
const sidebarMenuBtn = document.querySelectorAll('.sidebar-list__item-link');

sidebarMenuBtn.forEach(item => {
    item.addEventListener('click', e => {
        document.querySelector('.sidebar-list__item--active') ? document.querySelector('.sidebar-list__item--active').classList.remove('sidebar-list__item--active') : ''
        item.parentElement.classList.add('sidebar-list__item--active')
    })
})


// serch 
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('input', event => {
    let inputLength = event.target.value.length;
    if (inputLength) {
        document.querySelector('.search').classList.add('search--active')
        document.querySelector('.search').style.borderImage = `linear-gradient(30deg, rgba(2,0,${inputLength * 50},1) 0%, rgba(42,95,${inputLength * 10},1) 28%, rgba(0,${inputLength * 15},${inputLength * 15},1) 60%, rgba(0,${inputLength * 15},${inputLength * 10},1) 100%)`
    } else {
        document.querySelector('.search').classList.remove('search--active')
        document.querySelector('.search').style.borderImage = 'none'
    }
})


// modal popup show / hide 
const activateProgramBtn = document.querySelector('.activate-btn');
const closeModalBtn = document.querySelector('.form-btn--close')

window.addEventListener('click', event => {
    if (event.target === activateProgramBtn) {
        document.querySelector('.activate-modal').classList.add('activate-modal-show')
        document.querySelector('html').style.overflow = 'hidden'
    }
    if (event.target === closeModalBtn || event.target === document.querySelector('.form-btn--active')) {
        document.querySelector('.activate-modal').classList.remove('activate-modal-show')
        document.querySelector('html').style.overflow = 'auto'
    }
})

// modal inputs mask 
const inputs = document.querySelectorAll('.form-input')
const usedInputsCount = [];

inputs.forEach((item, index) => {
    item.addEventListener('input', e => {
        const regExp = /^\d/
        if (e.target.value.match(regExp)) {
            usedInputsCount.push(index)
            item.nextElementSibling.focus()
        } else {
            e.target.value = ''
        }
        if (usedInputsCount.length === inputs.length) {
            document.querySelector('.form-btn').classList.add('form-btn--active')
        } else {
            document.querySelector('.form-btn').classList.remove('form-btn--active')
        }
    })
})