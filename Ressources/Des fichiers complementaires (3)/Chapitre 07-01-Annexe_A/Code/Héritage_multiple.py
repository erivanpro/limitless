class Book: 
    def __init__(self, title, author, year, nbPages, language):
        self.title = title
        self.author = author
        self.year = year
        self.nbPages = nbPages
        self.language = language
        
    def get_infos(self):
        print(f"Voici les informations du livre : {self.title}")
        print(f"Auteur : {self.author}")
        print(f"Année de sortie : {self.year}")
        print(f"Nombre de pages: {self.nbPages}")
        print(f"Langue : {self.language}")

class Product_Line :
    def __init__(self, product_line_name, price):
        self.product_line_name =  product_line_name
        self.price = price
        
    def get_infos(self):
        print(f"Gamme : {self.product_line_name}")
        print(f"Prix : {self.price}")
        
        
class ITBook(Book,Product_Line):
    def __init__(self, title, author, year, nbPages, language, domain, technologies, product_line_name, price):
        Book.__init__(self,title, author, year, nbPages, language)
        Product_Line.__init__(self, product_line_name, price)
        self.domain = domain
        self.technologies = technologies
         
    def get_infos(self):
        Book.get_infos(self)
        Product_Line.get_infos(self)
        print(f"Domain d'application : {self.domain}")
        print(f"Technologies utilisées : {self.technologies}\n\n")

   
        
book1 = ITBook("Data Science avec Microsoft Azure", "M.Khichane", 2018, 346, "Français", "Data Science", ["Azure", "Azure ML", "PowerBI", "R"], "Epsilon", 54)
book1.get_infos()  
 






 