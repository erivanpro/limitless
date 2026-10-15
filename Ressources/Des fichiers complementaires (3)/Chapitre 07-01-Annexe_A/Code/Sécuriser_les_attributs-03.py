class PrivateClass: 
    def __init__(self, valeur):
        self.__private = valeur
 
 
obj = PrivateClass(10)
print("La valeur de la variable private :", obj._PrivateClass__private)

