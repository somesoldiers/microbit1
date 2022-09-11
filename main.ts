input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
    pins.digitalWritePin(DigitalPin.P0, 0)
    for (let index = 0; index < 4; index++) {
        pins.servoWritePin(AnalogPin.P2, 50)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(500)
    }
})
music.onEvent(MusicEvent.MelodyEnded, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, -50)
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
})
music.onEvent(MusicEvent.MelodyNotePlayed, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(200)
})
pins.digitalWritePin(DigitalPin.P1, 1)
basic.showString("Hi FINN")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
