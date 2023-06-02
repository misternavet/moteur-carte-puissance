radio.setGroup(22)
let onoff = 0
let accéleration = 204
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 204)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 204)
        onoff = 1
    } else if (input.buttonIsPressed(Button.B)) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 204)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 204)
        onoff = 1
    } else {
        if (onoff == 1) {
            accéleration = 204
            for (let index = 0; index < 204; index++) {
                basic.pause(10)
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, accéleration)
                motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, accéleration)
                accéleration += -1
            }
            onoff = 0
        } else {
            motor.motorStopAll()
        }
    }
})
