input.onButtonPressed(Button.A, function () {
    Aforo += 1
    basic.showNumber(Aforo)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Aforo")
    basic.showNumber(Aforo)
})
input.onButtonPressed(Button.B, function () {
    Aforo += -1
    basic.showNumber(Aforo)
})
let Aforo = 0
Aforo = 0
basic.showString("Contador")
