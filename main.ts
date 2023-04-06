let Estado = 0
basic.showIcon(IconNames.House)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && Estado == 0) {
        basic.showIcon(IconNames.Square)
        Estado = 1
        while (input.buttonIsPressed(Button.A)) {
            basic.pause(100)
        }
    }
    if (input.buttonIsPressed(Button.A) && Estado == 1) {
        basic.showIcon(IconNames.No)
        Estado = 0
        while (input.buttonIsPressed(Button.A)) {
            basic.pause(100)
        }
    }
})
