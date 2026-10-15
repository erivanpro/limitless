import matplotlib.pyplot as plt
import random
import math

X = []
Y = []

r = 0.5
for i in range(100):
    x = i + random.uniform(-r,r)
    y = math.sqrt(i)+random.uniform(-r,r)
    X.append(x)
    Y.append(y)

def D2(A,B):
    x1,y1 = A
    x2,y2 = B
    return (x1-x2)**2+(y1-y2)**2

def Dist(A,B,P):
    a2 = D2(B,P)
    a = math.sqrt(a2)
    b2 = D2(A,P)
    c2 = D2(A,B)
    h2 = c2 - ((c2+a2-b2)/(2*a))**2
    return math.sqrt(h2)

def SimplifOK(i,j,maxDist):
    A = (X[i],Y[i])
    B = (X[j],Y[j])
    for t in range(i+1,j):
       P = (X[t],Y[t])
       if Dist(A,B,P) > maxDist :
         return False
    return True

SX = [X[0]]
SY = [Y[0]]
lastP = 0
cur   = 1
while cur < len(X):
    if SimplifOK(lastP,cur,10) == False :
        SX.append(X[cur-1])
        SY.append(Y[cur-1])
        lastP = cur-1
    cur += 1
SX.append(X[-1])
SY.append(Y[-1])

plt.plot(X,Y)
plt.plot(SX,SY,'r')
plt.plot(SX,SY,'ro')
plt.show()
