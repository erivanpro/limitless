import matplotlib.pyplot as plt
import time
import numpy

## fonction à étudier

def CompteDoublons(L1,n,L2,m) :
    nb = 0
    for i in range(n):
        for j in range(m):
            if L1[i] == L2[j] :
                nb += 1
    return nb

## initialisation des tableaux
n = 10**2
pas = 5*n
n_max = n * 100
L1 = numpy.random.randint(10000, size=n_max)
L2 = numpy.random.randint(10000, size=n_max)

Ln = []  # liste stockant les différentes valeurs de n
Ld = []  # liste stockant la mesure de temps

## lancement des scénarios de tests
while n < n_max :
    start = time.time()
    CompteDoublons(L1,n,L2,n)
    duree = time.time()-start
    print("n : {0:8d}    T(n) : {1:5.2f} s".format(n,duree))
    Ln.append(n)
    Ld.append(duree)
    n += pas

## graphique

plt.plot(Ln, Ld, 'ro')
plt.show()
