/*const pedazosDeTorta = prompt ("Ingresa los pedazos de torta")
const invitados = prompt ("Ingresa los invitados")
const cantidadDePedazosPorInvitado = pedazosDeTorta / invitados
console.log (cantidadDePedazosPorInvitado)
if (cantidadDePedazosPorInvitado >= 1) {
    alert ("Hay suficientes pedazos de torta para todos")
} else {
    alert ("Hay más invitados que pedazos de torta")
}*/

const pedazosDeTorta = document.querySelector ('#input1').value
console.log (input1)
const invitados = document.querySelector ('#input2').value
console.log (input2)
const cantidadDePedazosPorInvitado = pedazosDeTorta/invitados
console.log (cantidadDePedazosPorInvitado)
const button = document.querySelector ('button')
console.log (button)
button.addEventListener ("click", function (){
    if (cantidadDePedazosPorInvitado >= 1) {
       const par = document.querySelector ('#resultado')
        par.innerHTML = 'Hay suficientes pedazos de torta para todos'
    } else {
       const par =document.querySelector ('#resultado')
        par.innerHTML = 'Hay más invitados que pedazos de torta'
    }
})
