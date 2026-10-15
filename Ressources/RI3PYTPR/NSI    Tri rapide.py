import numpy
nb = 13
L = numpy.random.randint(1,10, size=nb)
T = numpy.zeros(nb,dtype=int)

def Partition(L,start,end,val):
    global T
    startT = start
    endT   = end

    for i in range(start,end+1):
        if L[i] > val :
            T[endT] = L[i]
            endT -= 1

        if L[i] < val :
            T[startT] = L[i]
            startT += 1


    nbInf = startT - start
    nbSup = end - endT

    for i in range(startT,endT+1) :
        T[i] = val
    print(T)

    for i in range(start,end+1) :
        L[i] = T[i]

    return nbInf,nbSup

def TriRapide(L,debut,fin):
    nbelem = fin-debut + 1
    if nbelem > 1 :
        valpivot = L[debut]
        nbInf,nbSup = Partition(L,debut,fin,valpivot)

        TriRapide(L,debut,debut + nbInf-1)
        TriRapide(L,fin - nbSup + 1,fin)


print(L)
TriRapide(L,0,nb-1)
print(L)
