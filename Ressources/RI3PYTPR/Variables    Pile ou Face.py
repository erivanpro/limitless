# Pile ou Face
import random

print("Donnez le nombre de tirage")
nb = int(input())

nbPile = 0
nbFace = 0
for i in range(nb) :
  PileFace = random.randint(0,1)
  if PileFace == 0 :
    nbPile += 1
  else :
    nbFace += 1

pcPile = nbPile/nb*100
pcFace = nbFace/nb*100
print("Tirages Pile {0} : {1:2.0f} %".format(nbPile, pcPile) )
print("Tirages Face {0} : {1:2.0f} %".format(nbFace, pcFace) )
