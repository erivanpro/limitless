import matplotlib.pyplot as plt
import random
import numpy as np
import copy

points= []
N = 50

Centre = [ (20,20), (80,50), (10,80)]

for categorie in range(3):
  for i in range(N):
     x = random.normalvariate(Centre[categorie][0],20)
     y = random.normalvariate(Centre[categorie][1],20)
     if 0 < x < 100 and 0 < y < 100 :
       points.append((x,y,categorie))

def Knearest(x,y,k):
    L = []
    for Data in points :
        xx,yy,cat = Data
        d = (xx-x)**2 + (yy-y)**2
        L.append((d,cat))

    L.sort()
    L = L[0:k]
    Qtt = [ 0,0,0]
    for v in L :
        categorie = v[1]
        Qtt[categorie] += 1

    if Qtt[0] >= Qtt[1] and Qtt[0] >= Qtt[2] : return 0
    if Qtt[1] >= Qtt[0] and Qtt[1] >= Qtt[2] : return 1
    if Qtt[2] >= Qtt[0] and Qtt[2] >= Qtt[1] : return 2


def Draw():
    LX = np.arange(0, 100, 1)
    LY = np.arange(0, 100, 1)
    XX , YY = np.meshgrid(LX, LY)
    C = copy.deepcopy(XX)

    for x in range(100):
        for y in range(100):
            C[y][x] = Knearest(x,y,3)

    levels = [-1, 0, 1, 2]
    c1 = ('r', 'g', 'b')

    plt.contourf(XX, YY, C, levels, colors = c1)
    c2 = ('darkred','darkgreen','lightblue' )
    for point in points:
        x,y,cat = point
        plt.scatter(x,y, s=20, c=c2[cat],  marker='o')
Draw()
plt.show()
