for n in [1,2,3,4,5] :
    if (n % 2)==0:
        print(f"{n} est un nombre pair")
        print(f"{n}**2 = {n**2}")
    elif (n%3)==0: 
        print(f"{n} est un multiple de 3")
        print(f"{n}**3 = {n**3}")
    elif (n%5)==0: 
        print(f"{n} est un multiple de 5")
        print(f"{n}**5 = {n**5}")
    else :
        print(f"{n} est un nombre impair, mais il n'est pas un multiple de 3" \
               " ni un multiple de 5. ")
print("fin du programme!")
