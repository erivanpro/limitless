# décalages de liste
L = [ 0, 1, 2, 3, 4, 5, 6, 7]

print(L)
for i in range(len(L)) :
  element = L.pop()
  L.insert(0,element)
  print(L)
