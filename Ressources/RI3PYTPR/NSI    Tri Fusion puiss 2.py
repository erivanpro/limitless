import numpy
nb = 16
L = numpy.random.randint(100, size=nb)
R = numpy.zeros(nb,dtype=int)


def Fusion(L,i,j,jend) :
    global R
    istart = i
    iend = j
    k = 0
    while i<iend and j<jend :
        if L[i] < L[j] :
            R[k] = L[i]
            i += 1
            k += 1
        else :
            R[k] = L[j]
            j += 1
            k += 1

    while i < iend :
        R[k] = L[i]
        k+= 1
        i += 1

    while j < jend :
        R[k] = L[j]
        j += 1
        k += 1

    for u in range(k) :
        L[istart + u ] = R[u]


def triFusion(L,nb):
    taille_paquet = 1
    while taille_paquet < nb :
        for i in range(0,nb,2*taille_paquet) :
            Fusion(L,i,i+taille_paquet,i+2*taille_paquet)
        print(L)
        taille_paquet *=2

print(L)
triFusion(L,nb)
