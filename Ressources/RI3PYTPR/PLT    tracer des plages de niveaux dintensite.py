import matplotlib.pyplot as plt
import numpy as np
import math
import copy

Lx = np.arange(-50, 150, 0.5)
Ly = np.arange(20, 180, 0.5)
X , Y = np.meshgrid(Lx,Ly)
V = X.copy() # fonction de copy() Numpy

for index, t in np.ndenumerate(X):
   i,j = index
   x = X[i][j]
   y = Y[i][j]
   V[i][j] = math.sqrt((x-30)**2+(y-80)**2)

plages = [ 0, 20, 50, 200]
coul = ('r', 'g', 'b')
CS = plt.contourf(X, Y, V, plages, colors = coul)

plt.colorbar(CS)
plt.show()
