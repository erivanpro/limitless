# Répartir les nombres impairs et pairs

L      = [ 4 , 7, 9, 8, 66, 33, 21, 42 ]
IMPAIR = []
PAIR   = []

for v in L :
    if v%2 == 0 :
        PAIR.append(v)
    else:
        IMPAIR.append(v)

print("PAIR   : ",PAIR)
print("IMPAIR : ",IMPAIR)
