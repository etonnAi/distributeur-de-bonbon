function Rouge () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function blanche () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 450) {
        Rouge()
    } else if (pins.analogReadPin(AnalogPin.P0) > 550) {
        vert()
    } else {
        blanche()
    }
})
