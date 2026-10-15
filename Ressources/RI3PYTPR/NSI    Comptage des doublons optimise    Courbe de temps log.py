import matplotlib.pyplot as plt
import time
import numpy

## fonction à étudier

def rech_dicho(L,ileft,iright,v):
    if iright - ileft < 2 :
        if L[ileft] == v : return ileft
        if iright != ileft and L[iright] == v : return iright
        return -1

    imid = (ileft+iright)//2
    if L[imid] == v : return imid
    if L[imid] <  v : return rech_dicho(L,imid+1,iright,v)
    if L[imid] >  v : return rech_dicho(L,ileft,imid-1,v)

def CompteDoublons(L1,n,L2,m) :
    nb = 0
    for i in range(n):
        if rech_dicho(L2,0,m-1,L1[i]) >= 0 :
            nb += 1
    return nb

## initialisation des listes
n = 10**2
n_max = n * 1000
L1 = numpy.zeros(n_max)      # 0 0 0
L2 = numpy.arange(1,n_max+1) # 1 2 3 ...


Ln = []  # liste stockant les différentes valeurs de n
Ld = []  # liste stockant la mesure de temps

## lancement des scénarios de tests
while n < n_max :
    start = time.perf_counter()
    CompteDoublons(L1,n,L2,n)
    duree = time.perf_counter()-start
    print("n : {0:8d}    T(n) : {1:5.3f} s".format(n,duree))
    Ln.append(n)
    Ld.append(duree/n)#on retire la linéarité pour étudier le log
    n = int(n * 1.414)

## graphique
plt.plot(Ln, Ld, 'ro')
plt.show()
