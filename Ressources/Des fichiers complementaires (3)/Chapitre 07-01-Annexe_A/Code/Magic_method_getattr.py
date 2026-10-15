class Book: 
    def __init__(self, title, author, price):
        self.title = title
        self.author = author
        if price < 60 : 
            self.price = price 
        
    def __getattr__(self, attr_name):
        return "l'attribut "+ attr_name + " n'est pas défini pour cet objet" 
        
        
book1 = Book("Data Science avec Microsoft Azure", "M.Khichane", 54)        
book2 = Book("Le Machine Learning avec Python", "M.Khichane", 1000)

print(f"Le titre =  {book1.title}: prix = {book1.price}")
print(f"Le titre =  {book2.title}: prix = {book2.price}")

 

 
 