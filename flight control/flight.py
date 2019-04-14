import sys
import time

import navio.pwm
import navio.util

navio.util.check_apm()

PWM_OUTPUT = 0
PWM_OUTPUT1 = 1
PWM_OUTPUT2 = 2
PWM_OUTPUT3 = 3

# setting up constants
SERVO_MIN = 1.250 #ms
SERVO_MAX = 1.750 #ms

class flight:
    """
        object of a schedules flight
    """
    def __init__(self):
        self.command = 1 # initialized to 1 so it takes off
        with navio.pwm.PWM(PWM_OUTPUT) as pwm, navio.pwm.PWM(PWM_OUTPUT1) as pwm1, navio.pwm.PWM(PWM_OUTPUT2) as pwm2, navio.pwm.PWM(PWM_OUTPUT3) as pwm3:
            # setup the update speed
            pwm.set_period(50)
            pwm1.set_period(50)
            pwm2.set_period(50)
            pwm3set_period(50)
            pwm.enable()
            pwm1.enable()
            pwm2.enable()
            pwm3.enable()

    def hover(self):
        while (input == 1):
            pwm.set_duty_cycle(1.5)
            pwm1.set_duty_cycle(1.5)
            pwm2.set_duty_cycle(1.5)
            pwm3.set_duty_cycle(1.5)
            input = self.comamnd

    def forward(self):
        while (input == 2):
            pwm.set_duty_cycle(1.5)
            pwm1.set_duty_cycle(1.7)
            pwm2.set_duty_cycle(1.5)
            pwm3.set_duty_cycle(1.7)
            pwm.set_duty_cycle(1.5)
            pwm1.set_duty_cycle(1.5)
            pwm2.set_duty_cycle(1.5)
            pwm3.set_duty_cycle(1.5)
            input = self.comamnd

    def backward(self):
        while (input == 3):
            pwm.set_duty_cycle(1.7)
            pwm1.set_duty_cycle(1.5)
            pwm2.set_duty_cycle(1.7)
            pwm3.set_duty_cycle(1.5)
            pwm.set_duty_cycle(1.5)
            pwm1.set_duty_cycle(1.5)
            pwm2.set_duty_cycle(1.5)
            pwm3.set_duty_cycle(1.5)
            input = self.comamnd

    def left(self):
        while (input == 4):
            pwm.set_duty_cycle(1.7)
            pwm1.set_duty_cycle(1.5)
            pwm2.set_duty_cycle(1.5)
            pwm3.set_duty_cycle(1.7)
            pwm.set_duty_cycle(1.5)
            pwm1.set_duty_cycle(1.5)
            pwm2.set_duty_cycle(1.5)
            pwm3.set_duty_cycle(1.5)
            input = self.comamnd

    def right(self):
        while (input == 5):
            pwm.set_duty_cycle(1.5)
            pwm1.set_duty_cycle(1.7)
            pwm2.set_duty_cycle(1.7)
            pwm3.set_duty_cycle(1.5)
            pwm.set_duty_cycle(1.5)
            pwm1.set_duty_cycle(1.5)
            pwm2.set_duty_cycle(1.5)
            pwm3.set_duty_cycle(1.5)
            input = self.comamnd

    def ascend(left):
        while (input == 6):
            pwm.set_duty_cycle(1.7)
            pwm1.set_duty_cycle(1.7)
            pwm2.set_duty_cycle(1.7)
            pwm3.set_duty_cycle(1.7)
            pwm.set_duty_cycle(1.5)
            pwm1.set_duty_cycle(1.5)
            pwm2.set_duty_cycle(1.5)
            pwm3.set_duty_cycle(1.5)
            input = self.comamnd

    def descend(left):
        while (input == 7):
            pwm.set_duty_cycle(1.4)
            pwm1.set_duty_cycle(1.4)
            pwm2.set_duty_cycle(1.4)
            pwm3.set_duty_cycle(1.4)
            pwm.set_duty_cycle(1.5)
            pwm1.set_duty_cycle(1.5)
            pwm2.set_duty_cycle(1.5)
            pwm3.set_duty_cycle(1.5)
            input = self.comamnd

def __name__ == '__main__':
    plan = flight()
    for i in range(0, 100):
        plan.ascend()
        time.sleep(2)
    plan.hover()
    plan.ascend()
    plan.hover()
    
    
    
    
    

    
   
    
