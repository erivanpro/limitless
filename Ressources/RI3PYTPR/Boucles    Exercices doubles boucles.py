for i in range(4) :
  for j in range(6) :
    print("{0:3d}".format(i*10+j),end="")
  print()

print("------------------------------------")


for j in range(6) :
  for i in range(4) :
    print("{0:3d}".format(i*10+j),end="")
  print()

print("------------------------------------")

for i in range(4) :
  if i % 2 == 0 :
    for j in range(6) :
      print("{0:3d}".format(j*10+i),end="")
  else:
    for j in range(6) :
      print("{0:3d}".format( i),end="")
  print()

print("------------------------------------")


for i in range(5) :
  for j in range(5) :
    if i != j :
      print("{0:3d}".format(j*10+i),end="")
    else:
      print(" ##",end='')
  print()

