import matplotlib.pyplot as plt
import time
import numpy

## fonction à étudier

def Min(Liste,nb) :
    min = Liste[0]
    for i in range(0,nb):
        if min < Liste[i] :
            min = Liste[i]
    return min

## initialisation des listes
n = 10**6
pas = 5*n
n_max = n * 100
L = numpy.random.randint(10000, size=n_max)

Ln = []  # liste stockant les différentes valeurs de n
Ld = []  # liste stockant la mesure de temps

## lancement des scénarios de tests
while n < n_max :
    start = time.time()
    Min(L,n)
    duree = time.time()-start
    print("n : {0:8d}    T(n) : {1:5.2f} s".format(n,duree))
    Ln.append(n)
    Ld.append(duree)
    n += pas

## graphique

plt.plot(Ln, Ld, 'ro')
plt.show()
