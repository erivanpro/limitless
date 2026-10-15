try:
    a=int(input("Veuillez saisir un nombre : "))
    print(f"10/{a}={10/a}")
except ValueError:
    print("Vous avez saisi une valeur non numérique !")
except ZeroDivisionError :
    print("La division par zéro est impossible !")
    
print("Je suis la dernière instruction de ce programme")
    


 








    
