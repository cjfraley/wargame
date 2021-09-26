import math
from fractions import Fraction

def binary_attack_model(attack, defense):
    chance_arr=[]
    for i in range(0,attack+1):
        chance_of_defending=Fraction(defense,6)
        chance_of_attack_hit=1-chance_of_defending
        denominator=math.factorial(attack-i)*math.factorial(i)
        chance_arr.append([
            i,
            str(Fraction((math.factorial(attack)*chance_of_attack_hit**i*chance_of_defending**(attack-i))/denominator))
            ])
    return chance_arr
if __name__ == '__main__':
    print(1, binary_attack_model(1,1))
    print(2, binary_attack_model(2,2))
    print(3, binary_attack_model(3,3))
    print(4, binary_attack_model(4,4))
    print(5, binary_attack_model(5,5))