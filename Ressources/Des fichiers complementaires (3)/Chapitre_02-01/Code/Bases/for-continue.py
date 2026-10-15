n = int(input("Veuillez saisir un nombre > 1 ? "))

for i in range(1, n+1):
    if (i%2)!=0 :
        continue
    print(f"{i}**2 = {i**2}")

print("fin du programme!")
 