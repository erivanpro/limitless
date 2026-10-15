#  fusionner deux listes triées
L1 = [ 1, 17, 22, 53, 75, 89]
L2 = [ 0, 5, 7, 20, 25, 30, 58, 71, 80, 98, 99]

R = []
i = 0
j = 0
nb1 = len(L1)
nb2 = len(L2)

while i<nb1 and j<nb2 : #il reste des éléments dans les 2 listes
    if L1[i] < L2[j] :  # on traite l'élément de L1 et on avance
        R.append(L1[i])
        i += 1
    else :              # on traite l'élément de L2 et on avance
        R.append(L2[j])
        j += 1

while i < nb1 :   # on traite les éléments restants dans L1
    R.append(L1[i])
    i += 1

while j < nb2 :   # on traite les éléments restants dans L2
    R.append(L2[j])
    j += 1

print(R)
