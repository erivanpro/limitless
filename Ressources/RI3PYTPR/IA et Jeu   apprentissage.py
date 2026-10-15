import random

V = [ (1,2), (3,6.1), (2,3.9) ]

Nb_iterations = 1000
Pas = 0.01
a = random.randint(-10,10)

for i in range(Nb_iterations):
  xp =  random.randint(0,len(V)-1)
  xi,yi = V[xp]
  DerErreur = 2 * (a * xi - yi) * xi
  if DerErreur > 0 :
      signe = 1
  else :
      signe = -1
  a = a - signe * Pas

  # affichage
  if i % 30 == 0 :
    Err = (a*xi-yi)**2
    print("Itération {0:5} : a={1:8.5}  Err : {2}".format(i,a,Err))


