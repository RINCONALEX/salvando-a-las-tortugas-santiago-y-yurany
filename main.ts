basic.forever(function () {
    basic.showNumber(input.temperature())
    music.playTone(523, music.beat(BeatFraction.Quarter))
    while (input.temperature() < 34) {
        basic.showNumber(input.temperature())
        basic.showString("T.alta")
        music.playTone(262, music.beat(BeatFraction.Quarter))
        while (input.temperature() < 26) {
            basic.showNumber(input.temperature())
            basic.showString("T.baja")
        }
        music.playTone(131, music.beat(BeatFraction.Quarter))
        while (input.temperature() < 27) {
            basic.showNumber(input.temperature())
            basic.showString("T.normal")
        }
    }
})
