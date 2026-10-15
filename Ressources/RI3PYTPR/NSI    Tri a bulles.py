import numpy
nb = 14
L = numpy.random.randint(100, size=nb)

def Permut(L,i,j):
    t = L[i]
    L[i] = L[j]
    L[j] = t

def TriABulles(L,nb):
    permut = True
    while(permut):
        permut = False
        for i in range(nb-1):
            if L[i] > L[i+1] :
                Permut(L,i,i+1)
                permut = True
        print(L)

print(L)
TriABulles(L,nb)
