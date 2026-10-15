import random

# génère trois chiffres aléatoires différents
def Genere3chiffresAlea(dec):
    a = random.randint(0,9)
    b = random.randint(0,9)
    c = random.randint(0,9)
    while b == a :
        b = random.randint(0,9)
    while c == a or c == b :
        c = random.randint(0,9)
    return [a+dec,b+dec,c+dec]

# génère une grille de 3x9 nombres
def Genere3x9nombres() :
    NombresGrilles = []
    for i in range(9) :
        NombresGrilles.append(Genere3chiffresAlea(i*10))
    return NombresGrilles

# affiche une grille
def AfficheGrille(Grille) :
    NombresGrilles = Genere3x9nombres()

    for ligne in range(3) :
        for col in range(9) :
            if Grille[ligne][col] == '0' :
                print(" ##",end="")
            else:
                v = NombresGrilles[col][ligne]
                print("{0:3}".format(v),end="")
        print()

L1 = "011001011"
L2 = "110100110"
L3 = "101011001"
S = [ L1 , L2, L3]
AfficheGrille(S)
