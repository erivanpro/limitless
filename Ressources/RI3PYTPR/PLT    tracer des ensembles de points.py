import matplotlib.pyplot as plt
import numpy
import random

X1 = []
Y1 = []
X2 = []
Y2 = []
X3 = []
Y3 = []

for i in range(10):
  X1.append(random.uniform(0,3))
  Y1.append(random.uniform(0,3))
  X2.append(random.uniform(0,3)+5)
  Y2.append(random.uniform(0,3))
  X3.append(random.uniform(0,3)+5)
  Y3.append(random.uniform(0,3)+4)

plt.plot(X1, Y1, 'ro')
plt.plot(X2, Y2, 'b^')
plt.plot(X3, Y3, 'gs')

plt.axis([-2,10,-2,8])
plt.show()
