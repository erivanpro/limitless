n = int(input("Veuillez saisir un nombre > 1 ? "))
prime=True
if n < 2: 
    prime = False
else:
    for i in range(2,n):
        if (n%i)==0:
            prime=False
            break
if prime :
    print(f"Le nombre {n} est un nombre premier")
else :    
    print(f"Le nombre {n} n'est pas un nombre composé")

print("fin du programme!")
 