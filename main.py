def on_received_number(receivedNumber):
    pass
radio.on_received_number(on_received_number)

def on_received_string(receivedString):
    global onoff, déccélération
    if receivedString == "Accelere":
        motor.motor_run(motor.Motors.M1, motor.Dir.CCW, 204)
        motor.motor_run(motor.Motors.M2, motor.Dir.CCW, 204)
        onoff = 1
    elif receivedString == "reculer":
        motor.motor_run(motor.Motors.M1, motor.Dir.CW, 204)
        motor.motor_run(motor.Motors.M2, motor.Dir.CW, 204)
        onoff = 2
    elif receivedString == "Gauche":
        if onoff == 1:
            motor.motor_run(motor.Motors.M1, motor.Dir.CCW, 80)
            motor.motor_run(motor.Motors.M2, motor.Dir.CCW, 255)
        elif onoff == 2:
            motor.motor_run(motor.Motors.M1, motor.Dir.CW, 80)
            motor.motor_run(motor.Motors.M2, motor.Dir.CW, 255)
        else:
            motor.motor_stop_all()
    elif receivedString == "Droite":
        if onoff == 1:
            motor.motor_run(motor.Motors.M1, motor.Dir.CCW, 255)
            motor.motor_run(motor.Motors.M2, motor.Dir.CCW, 80)
        elif onoff == 2:
            motor.motor_run(motor.Motors.M1, motor.Dir.CW, 255)
            motor.motor_run(motor.Motors.M2, motor.Dir.CW, 80)
        else:
            motor.motor_stop_all()
    elif receivedString == "Boost":
        motor.motor_run(motor.Motors.M1, motor.Dir.CCW, 255)
        motor.motor_run(motor.Motors.M2, motor.Dir.CCW, 255)
    elif receivedString == "Frein":
        onoff = 0
    else:
        if onoff == 1 and receivedString != "Boost":
            déccélération = 204
            for index in range(204):
                motor.motor_run(motor.Motors.M1, motor.Dir.CCW, déccélération)
                motor.motor_run(motor.Motors.M2, motor.Dir.CCW, déccélération)
                basic.pause(2)
                déccélération += -1
            onoff = 0
        else:
            motor.motor_stop_all()
radio.on_received_string(on_received_string)

déccélération = 0
onoff = 0
radio.set_transmit_power(7)
radio.set_group(33)
onoff = 0
déccélération = 204
accéleration = 0