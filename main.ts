radio.onReceivedValue(function (name, value) {
    if (name == "X") {
        X = value / 1023 * 2 - 1
    }
    if (name == "Y") {
        Y = value / 1023 * 2 - 1
    }
    if (name == "RED") {
        RED = value * 15
    }
    if (name == "YELLOW") {
        YELLOW_R = value * 15
        YELLOW_G = value * 15
    }
    if (name == "GREEN") {
        GREEN = value * 15
    }
    if (name == "BLUE") {
        BLUE = value * 15
    }
    if (name == "A") {
        A = value
    }
    if (name == "B") {
        B = value
    }
})
let B = 0
let A = 0
let BLUE = 0
let GREEN = 0
let YELLOW_G = 0
let YELLOW_R = 0
let RED = 0
let Y = 0
let X = 0
radio.setGroup(1)
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P1, ((X + Y) / 4 + 0.5) * 180)
    pins.servoWritePin(AnalogPin.P2, ((X - Y) / 4 + 0.5) * 180)
})
basic.forever(function () {
    strip.showColor(neopixel.rgb(RED + YELLOW_R, GREEN + YELLOW_G, BLUE))
})
basic.forever(function () {
    if (A == 1) {
        if (B == 1) {
            basic.showIcon(IconNames.Heart)
        } else {
            basic.showIcon(IconNames.Diamond)
        }
    } else {
        if (B == 1) {
            basic.showIcon(IconNames.No)
        } else {
            basic.showIcon(IconNames.Happy)
        }
    }
})
