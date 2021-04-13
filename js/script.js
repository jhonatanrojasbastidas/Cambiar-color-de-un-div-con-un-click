const button = document.querySelector('button')
const div = document.querySelector('cuadrado')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple','DarkCyan','DarkOliveGreen','DarkSlateBlue','Khaki']

cuadrado.style.backgroundColor = 'black'
button.addEventListener('click', cambiarColorCuadrado)

function  cambiarColorCuadrado(){
    const colorIndex= parseInt(Math.random()*colors.length)
    cuadrado.style.backgroundColor = colors[colorIndex]
}