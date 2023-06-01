radio.setGroup(22)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 204)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 204)
    } else if (input.buttonIsPressed(Button.A)) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 204)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 204)
    } else {
        motor.motorStopAll()
    }
})
