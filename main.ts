radio.onReceivedString(function (receivedString) {
    if (receivedString == "Accelere") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, accéleration)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, accéleration)
        onoff = 1
    } else if (receivedString == "reculer") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 180)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 180)
        onoff = 2
    } else if (receivedString == "Gauche") {
        if (onoff == 1 || onoff == 3) {
            motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 80)
            motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 255)
        } else if (onoff == 2) {
            motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 80)
            motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 255)
        } else {
            motor.motorStopAll()
        }
    } else if (receivedString == "Droite") {
        if (onoff == 1 || onoff == 3) {
            motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
            motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 80)
        } else if (onoff == 2) {
            motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
            motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 80)
        } else {
            motor.motorStopAll()
        }
    } else if (receivedString == "Boost") {
        accéleration = 255
        boost = 1
    } else {
        if (onoff == 1 && receivedString != "Boost") {
            déccélération = 180
            for (let index = 0; index < 180; index++) {
                if (receivedString == "Frein") {
                    motor.motorStopAll()
                    onoff = 0
                } else {
                    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, déccélération)
                    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, déccélération)
                    basic.pause(2)
                    déccélération += -1
                }
            }
            onoff = 0
        } else {
            onoff = 0
            motor.motorStopAll()
        }
    }
})
function invincibilité_musique () {
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(523, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(523, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(523, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(523, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    basic.pause(100)
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    basic.pause(100)
}
let boost = 0
let accéleration = 0
let déccélération = 0
let onoff = 0
music.setVolume(255)
radio.setTransmitPower(7)
radio.setGroup(33)
onoff = 0
déccélération = 204
accéleration = 180
basic.forever(function () {
    if (onoff == 1 && boost == 0) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 196, 196, 255, 255, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
basic.forever(function () {
    if (boost == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            # . . . #
            `)
        for (let index = 0; index < 6; index++) {
            invincibilité_musique()
        }
        accéleration = 180
        boost = 0
    } else {
        basic.showString("mon nom BOBERT")
    }
})
