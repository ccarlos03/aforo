input.onButtonPressed(Button.A, function () {
    crece += -1
    basic.showNumber(crece)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    crece += 1
    basic.showNumber(crece)
})
let crece = 0
crece = 0
basic.forever(function () {
    basic.showNumber(crece)
})
