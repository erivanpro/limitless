import numpy
nb = 10

def PosMin(T,nb) :
   posmin = 0
   for i in range(1,nb):
       if T[i] < T[posmin] :
           posmin = i
   return posmin

def TriSelection(L,R,nb):
    Lnb = nb  # nombre d'éléments stockés dans L
    Rnb = 0   # nombre d'éléments stockés dans R

    for i in range(nb):       # parcours des éléments de L
        pmin = PosMin(L,Lnb)  # recherche de la pos du min
        R[Rnb] = L[pmin]      # insertion du min dans R
        L[pmin] = L[Lnb-1]    # l'élément en fin remplit le trou
        L[Lnb-1] = 99         # debug
        Lnb -=1               # un élément en moins dans L
        Rnb +=1		          # un élément en plus dans R
        print(L,R)

L = numpy.random.randint(10,100, size=nb)
R = numpy.zeros(nb,dtype=int)
print(L)
TriSelection(L,R,nb)
