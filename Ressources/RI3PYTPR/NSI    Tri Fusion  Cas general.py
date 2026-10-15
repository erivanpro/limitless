import numpy
nb = 15
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
      if i+2*taille_paquet  < nb : # 2 taille identique
        Fusion(L,i,i+taille_paquet,i+2*taille_paquet)
      else:
        if i+taille_paquet  < nb : # 2 tailles différentes
          Fusion(L,i,i+taille_paquet,nb)
        # sinon, 1 seul paquet, on ne fait rien
    print(L)
    taille_paquet *=2
  derniere_taille_paquet = taille_paquet // 2
  # fusionne le paquet avec le paquet restant
  Fusion(L,0,derniere_taille_paquet,nb)
  print(L)


print(L)
triFusion(L,nb)
