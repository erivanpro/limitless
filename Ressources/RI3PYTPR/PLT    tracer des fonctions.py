import matplotlib.pyplot as plt
import numpy

X = numpy.arange(-1,5,0.1)

Y = []
for x in X :
  Y.append(x**2)

plt.plot(X,Y)
plt.show()
