import matplotlib.pyplot as plt
import math

X = []
Y = []

r = 1
theta = 0
nb = 0
while nb < 600 :
    x = r * math.cos(theta)
    y = r * math.sin(theta)
    X.append(x)
    Y.append(y)
    theta += 0.2  # on tourne
    r *= 1.03     # on s'éloigne du centre
    nb += 1

plt.plot(X,Y)
plt.show()
