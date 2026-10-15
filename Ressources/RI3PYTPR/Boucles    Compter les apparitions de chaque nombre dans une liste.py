# Comptez les apparitions de chaque nombre dans une liste

L = [ 0, 5, 8, 0, 5, 4, 4, 0, 0, 5, 0 ]

comptage = [0] * 10

for v in L :
  comptage[v] += 1

for v in range(10) :
  if comptage[v] > 0 :
    print("Chiffre {0} apparaît {1} fois".format(v,comptage[v]))
