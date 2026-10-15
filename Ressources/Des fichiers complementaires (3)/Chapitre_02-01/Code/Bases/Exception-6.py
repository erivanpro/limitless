def fonction_2():
    try: 
        a=int(input("Veuillez saisir un nombre : "))
        print(f"10/{a}={10/a}")
    except Exception as ex :
        print("Exception levée dans la fonction fonction_2")
        raise ex

def fonction_1():
    try:    
        fonction_2()    
    except ValueError:
        print("Vous avez saisi une valeur non numérique !")
    except ZeroDivisionError :
        print("La division par zéro est impossible !")

fonction_1()    
print("Je suis la dernière instruction de ce programme")
    


 








    
