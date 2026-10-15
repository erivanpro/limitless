class PrivateClass: 
    def __init__(self, valeur):
        self.__private = valeur
    
    def get_private_value(self):
        return self.__private

obj = PrivateClass(10)
print("La valeur de la variable private :",obj.__private)
