

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const getInputs = $$('.input')

getInputs.forEach((input,index) => {
    const getMessage = input.parentElement.querySelector('.message')
    const getLine = input.parentElement.querySelector('.line')
    const getLabel = input.parentElement.querySelector('.label-text')
    input.addEventListener('change', (evt) => {
        let inputValue = input.value.trim()

        if(inputValue.length != '') {
            getLabel.style.top = '0'
        }

        else {
            getLabel.style.top = '50%'
        }

        if(inputValue.length < 6) {
            getMessage.innerHTML = 'Vui long nhap dung truong nay'
        }
        else {
            getMessage.innerHTML = ''
        }
    })
})











    






