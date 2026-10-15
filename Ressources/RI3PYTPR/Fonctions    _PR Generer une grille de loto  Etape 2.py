import random

###############################################################
##  Création du masque de grille

# génère toutes les configurations de lignes : 0=vide 1=nombre
def Combi9Cases() :
    LCombi = []
    H = [ "000", "001", "010", "011", "100", "101", "110", "111"]
    for a in H :
        for b in H :
            for c in H :
                LCombi.append(a+b+c)
    return LCombi


# compte le nombre de 1 sur une ligne
def Count1(L):
    s = 0
    for i in range(9) :
       if  L[i] == "1" :
           s+=1
    return s

# vérifie : pas de colonne vide / pas de col pleine
def TestV(L1,L2,L3) :
    for i in range(9):
        V = L1[i] + L2[i] + L3[i]
        if V == "000" : return False
        if V == "111" : return False
    return True

# filtres les lignes par rapport aux contraintes horizontales
def FiltreLignes(LCombi):
    LignesOK = []

    for comb in LCombi :
        if comb.find("111") < 0 and comb.find("000") < 0 :
            if Count1(comb) == 5 :
               LignesOK.append(comb)

    return LignesOK

def CreeMasqueGrille(LignesOK):
    # choisit 3 lignes aléatoirement
    # qui doivent satisfaire la contraintes des colonnes
    nb = len(LignesOK)
    L1 = LignesOK[random.randint(0,nb-1)]
    L2 = LignesOK[random.randint(0,nb-1)]
    L3 = LignesOK[random.randint(0,nb-1)]

    while TestV(L1,L2,L3) == False :
        L1 = LignesOK[random.randint(0,nb-1)]
        L2 = LignesOK[random.randint(0,nb-1)]
        L3 = LignesOK[random.randint(0,nb-1)]

    return [L1,L2,L3]

#######################################################
## Affichage

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

##################################################
## bloc principal

L = Combi9Cases()
LignesOK = FiltreLignes(L)
SOL = CreeMasqueGrille(LignesOK)
AfficheGrille(SOL)
