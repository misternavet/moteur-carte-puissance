def on_received_string(receivedString):
    global onoff, accéleration, boost, déccélération
    if receivedString == "Accelere":
        motor.motor_run(motor.Motors.M1, motor.Dir.CCW, accéleration)
        motor.motor_run(motor.Motors.M2, motor.Dir.CCW, accéleration)
        onoff = 1
    elif receivedString == "reculer":
        motor.motor_run(motor.Motors.M1, motor.Dir.CW, 180)
        motor.motor_run(motor.Motors.M2, motor.Dir.CW, 180)
        onoff = 2
    elif receivedString == "Gauche":
        if onoff == 1 or onoff == 3:
            motor.motor_run(motor.Motors.M1, motor.Dir.CCW, 80)
            motor.motor_run(motor.Motors.M2, motor.Dir.CCW, 255)
        elif onoff == 2:
            motor.motor_run(motor.Motors.M1, motor.Dir.CW, 80)
            motor.motor_run(motor.Motors.M2, motor.Dir.CW, 255)
        else:
            motor.motor_stop_all()
    elif receivedString == "Droite":
        if onoff == 1 or onoff == 3:
            motor.motor_run(motor.Motors.M1, motor.Dir.CCW, 255)
            motor.motor_run(motor.Motors.M2, motor.Dir.CCW, 80)
        elif onoff == 2:
            motor.motor_run(motor.Motors.M1, motor.Dir.CW, 255)
            motor.motor_run(motor.Motors.M2, motor.Dir.CW, 80)
        else:
            motor.motor_stop_all()
    elif receivedString == "Boost":
        accéleration = 255
        boost = 1
    else:
        if onoff == 1 and receivedString != "Boost":
            déccélération = 180
            for index in range(204):
                motor.motor_run(motor.Motors.M1, motor.Dir.CCW, déccélération)
                motor.motor_run(motor.Motors.M2, motor.Dir.CCW, déccélération)
                basic.pause(2)
                déccélération += -1
            onoff = 0
        else:
            onoff = 0
            motor.motor_stop_all()
radio.on_received_string(on_received_string)

def invincibilité_musique():
    music.play_tone(523, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(523, music.beat(BeatFraction.EIGHTH))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(523, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(523, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(523, music.beat(BeatFraction.EIGHTH))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(523, music.beat(BeatFraction.EIGHTH))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(523, music.beat(BeatFraction.EIGHTH))
    music.rest(music.beat(BeatFraction.EIGHTH))
    basic.pause(100)
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(494, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(494, music.beat(BeatFraction.EIGHTH))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(494, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(494, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(494, music.beat(BeatFraction.EIGHTH))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(494, music.beat(BeatFraction.EIGHTH))
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play_tone(494, music.beat(BeatFraction.EIGHTH))
    music.rest(music.beat(BeatFraction.EIGHTH))
    basic.pause(100)
boost = 0
accéleration = 0
déccélération = 0
onoff = 0
music.set_volume(255)
radio.set_transmit_power(7)
radio.set_group(33)
onoff = 0
déccélération = 204
accéleration = 180

def on_forever():
    if onoff == 1 and boost == 0:
        music.play_sound_effect(music.create_sound_effect(WaveShape.SQUARE,
                196,
                196,
                255,
                255,
                100,
                SoundExpressionEffect.VIBRATO,
                InterpolationCurve.LINEAR),
            SoundExpressionPlayMode.UNTIL_DONE)
basic.forever(on_forever)

def on_forever2():
    global accéleration, boost
    if boost == 1:
        basic.show_leds("""
            . . # . .
                        . . # . .
                        # # # # #
                        . # # # .
                        # . . . #
        """)
        for index2 in range(6):
            invincibilité_musique()
        accéleration = 180
        boost = 0
    else:
        basic.show_string("mon nom BOBERT")
basic.forever(on_forever2)
