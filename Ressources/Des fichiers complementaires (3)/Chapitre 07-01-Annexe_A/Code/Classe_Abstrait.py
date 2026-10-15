from abc import ABC, abstractmethod

class Geom(ABC): 
    def __init__(self, color):
        self.color = color

    @abstractmethod 
    def get_area():
        pass

 
           
 
class Circle(Geom):
    def __init__(self, color, radius):
        super().__init__(color)
        self.radius = radius
    
    def get_area(self):
        area = 3.14 * (self.radius**2)    
        return area 
     
        
class Square(Geom):
    def __init__(self, color, side):
        super().__init__(color)
        self.side = side
    
    def get_area(self):
        area = self.side**2
        return area 
        
        
circle = Circle("red", 5)
square = Square("green", 5)
print(f"Cercle de diamètre {circle.radius} à une surface de {circle.get_area()}")
print(f"Carré de côté {square.side}cm à une surface de {square.get_area()}")





 