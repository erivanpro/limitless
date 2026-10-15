# Resoudre un cryptarithme

for U in range(1,10) :
 for N in range(10) :
  for E in range(10) :
   for F in range(10) :
    for O in range(1,10) :
     for Z in range(10) :
      dif1 = U != N and U != E and U != F and U != O and U!=Z
      dif2 = N != E and N != F and N != O and N != Z
      dif3 = E != F and E != O and E != Z
      dif4 = F != O and F != Z and O != Z
      if dif1 and dif2 and dif3 and dif4 :
        ONZE = O * 1000 + N * 100 + Z * 10 + E
        UN = U * 10 + N
        NEUF = N * 1000 + E * 100 + U * 10 + F
        if UN + UN + NEUF == ONZE :
          print(UN,"+",UN,"+",NEUF,"=",ONZE )
