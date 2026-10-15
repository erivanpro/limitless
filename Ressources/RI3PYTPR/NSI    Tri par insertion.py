import numpy
nb = 10
L = numpy.random.randint(100, size=nb)
R = numpy.zeros(nb,dtype=int)

def Insertion(T,nb,pos,val):
   i = nb
   while i >= pos :
      T[i] = T[i-1]
      i -=1
   T[pos] = val

def PosInsertion(T,nb, val) :
   i = 0
   while i < nb and T[i] < val :
      i+= 1
   return i


def Tri(L,R,nb):
   nbR = 0  # nombre d'éléments stockés dans R
   for i in range(nb):
      val = L[i]
      pos = PosInsertion(R,nbR,val)
      print(R)
      Insertion(R,nbR,pos,val)
      nbR += 1

print(L)
Tri(L,R,nb)
print(R)
