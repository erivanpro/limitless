# Vérifier si une liste est triée
L = [1,5,11,19,8,50,77]

for i in range(len(L) - 1): # -1 pour ne pas traiter le dernier
   v1 = L[i]
   v2 = L[i+1]
   if v2 < v1 :
      print("Erreur ",v1,v2, "dans le mauvais ordre.")
