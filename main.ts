radio.onReceivedString(function (receivedString) {
    if (receivedString == "Accelere") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 205)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 205)
        onoff = 1
    } else if (receivedString == "reculer") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 204)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 204)
        onoff = 2
    } else if (receivedString == "droite") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 178)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 255)
        onoff = 1
    } else if (receivedString == "gauche") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 178)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 255)
        onoff = 1
    } else {
        if (onoff == 1) {
            déccélération = 204
            for (let index = 0; index < 204; index++) {
                motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, déccélération)
                motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, déccélération)
                basic.pause(1)
                déccélération += -1
            }
            onoff = 0
        } else if (onoff == 2) {
            déccélération = 204
            for (let index = 0; index < 204; index++) {
                motor.MotorRun(motor.Motors.M1, motor.Dir.CW, déccélération)
                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, déccélération)
                basic.pause(1)
                déccélération += -1
            }
            déccélération = 0
        } else {
            motor.motorStopAll()
        }
    }
})
let déccélération = 0
let onoff = 0
radio.setTransmitPower(7)
radio.setGroup(33)
onoff = 0
déccélération = 204
let accéleration = 0
