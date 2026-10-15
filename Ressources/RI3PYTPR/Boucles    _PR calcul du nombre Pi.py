#calcul du nombre Pi
import math

for k in range(3) :
  n = 16 * 10**k
  print("n =",n)
  comptage = 0
  largeur_case = 2 / n
  for y in range(n):
    for x in range(n):
      xx = largeur_case * x
      yy = largeur_case * y
      dx = xx - 1
      dy = yy - 1
      d2 = dx*dx + dy*dy
      if d2 < 1 :  # équivaut à math.sqrt(d2) < 1
        comptage += 1

  approx_pi = 4 * comptage / (n*n)
  print("Approximation de pi : " , approx_pi)
  erreur = abs(approx_pi-math.pi)
  erreur_theorique = 16 / n
  print("Erreur estimation   : ", erreur)
  print("Erreur théorique    : ", erreur_theorique)
  print()
