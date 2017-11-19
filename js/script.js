const editor = document.getElementById('editor'),
      colorPalette = ['000000', 'FF9966', '6699FF', '99FF66', 'CC0000', '00CC00', '0000CC', '333333', '0066FF', 'FFFFFF'],
      forePalette = document.querySelector('.fore-palette'),
      backPalette = document.querySelector('.back-palette'),
      toolbar = document.querySelector('.toolbar'),
      toolbar_a = document.querySelectorAll('.toolbar a')

editor.style.cssText = `
max-height: ${ window.innerHeight - toolbar.offsetHeight }px
`

for (color in colorPalette) {
    forePalette.innerHTML += `<a href="#" data-command="forecolor" data-value="#${ colorPalette[color] }" style="background-color:#${ colorPalette[color] };" class="palette-item"></a>`
    backPalette.innerHTML += `<a href="#" data-command="backcolor" data-value="#${ colorPalette[color] }" style="background-color:#${ colorPalette[color] };" class="palette-item"></a>`
}

toolbar_a.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()

        let command = el.getAttribute('data-command'),
            value = el.getAttribute('data-value')

        if(command == 'save') {
            save()
        } else
        if(command == 'h1' || command == 'h2' || command == 'p') {
            document.execCommand('formatBlock', false, command)
        } else
        if(command == 'forecolor' || command == 'backcolor') {
            document.execCommand(command, false, value)
        } else
        if(command == 'createlink' || command == 'insertimage') {
            url = prompt('Enter the link here: ', 'http:\/\/')
            document.execCommand(command, false, url)
        } else {
            document.execCommand(command, false, null)
        }
  })
})

function save() {
    alert('save')
}