import matplotlib.pyplot as plt
import numpy
import math

X = numpy.arange(-1, 5, 0.1)

Y = []
Ys = []
for x in X :
   Y.append(x**2)
   Ys.append(math.sin(x)+1)

plt.plot(X,Y)
plt.plot(X,Ys)

plt.title('mon titre')
plt.grid(True)        # affichage une grille en fond
plt.xlabel('x label') # donne un nom à l'axe des x
plt.ylabel('y label') # donne un nom à l'axe des y

# affiche une légende
plt.legend(["courbe 1","courbe 2"])

# définit le cadrage de l'affichage : xmin/xmax ymin/ymax
plt.axis([0, 5, 0, 3])

plt.show()
