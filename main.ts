radio.onReceivedNumber(function (receivedNumber) {
	
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Accelere") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 204)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 204)
        onoff = 1
    } else if (receivedString == "reculer") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 204)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 204)
        onoff = 2
    } else if (receivedString == "Gauche") {
        if (onoff == 1) {
            motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 80)
            motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 255)
        } else if (onoff == 2) {
            motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 80)
            motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 255)
        } else {
            motor.motorStopAll()
        }
    } else if (receivedString == "Droite") {
        if (onoff == 1) {
            motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
            motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 80)
        } else if (onoff == 2) {
            motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
            motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 80)
        } else {
            motor.motorStopAll()
        }
    } else if (receivedString == "Boost") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 255)
    } else if (receivedString == "Frein") {
        onoff = 0
    } else {
        if (onoff == 1 && receivedString != "Boost") {
            déccélération = 204
            for (let index = 0; index < 204; index++) {
                motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, déccélération)
                motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, déccélération)
                basic.pause(2)
                déccélération += -1
            }
            onoff = 0
        } else {
            motor.motorStopAll()
            onoff = 0
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
