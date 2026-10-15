# sommes des n premiers entiers
print("Entrez le nombre n : ")
n = int(input())

somme = 0
for i in range(n+1):    # piège : pensez à écrire n+1
  somme = somme + i

print ("Somme :",somme)
