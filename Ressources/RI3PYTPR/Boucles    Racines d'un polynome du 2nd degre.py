# racines d'un polynome du 2nd degré
import math

print("Entrez à la suite les valeurs a,b et c (ax²+bx+c) séparées par des espaces")
coefs = input()

abc = coefs.split(" ")
a = float(abc[0])
b = float(abc[1])
c = float(abc[2])

delta = b**2 - 4 * a * c

if delta < 0 :
    print("Aucune racine")
else :
    rdelta = math.sqrt(delta)
    if rdelta == 0 :
        print("1 racine : ", -b/(2*a))
    else:
        r1 = (-b-rdelta)/ (2*a)
        r2 = (-b+rdelta)/ (2*a)

        print("2 racines : ", r1, r2)

