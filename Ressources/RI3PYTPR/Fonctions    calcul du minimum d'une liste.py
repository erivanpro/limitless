# calcul du minimum d'une liste

def Minimum(L) :
    min_courant = L[0]
    for v in L :
        if v < min_courant :
            min_courant = v
    return min_courant

print( Minimum([4,88,9,-11,-55]) )
