#Construire un tableau de comparaison

L1 = [ 5,15,20,77,98]
L2 = [ 1,15, 18,55,60,65,77,80,85,93,99]

print(" ",end='')
for v2 in L2 :
  print("{0:3}".format(v2), end = '')
print()

for v1 in L1 :
  print("{0:3}".format(v1),end='')

  for v2 in L2 :
    if v1 < v2  : print(" <",end='')
    if v1 == v2 : print(" =",end='')
    if v1 > v2  : print(" >",end='')
  print()
