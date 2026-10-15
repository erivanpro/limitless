# Trouvez tous les nombres premiers jusqu'à 100

print("Nombres premiers trouvés : ")

for k in range(1,100) :
    premier = True
    for v in range(2,k) :
        if k%v == 0 :
            premier = False
    if premier :
         print(k,end=" ")
