class Book: 
    def __init__(self, title, author, year, nbPages, language):
        self.title = title
        self.author = author
        self.year = year
        self.nbPages = nbPages
        self.language = language
    
    
    def __str__(self):
        book_to_string = f"Voici les informations du livre : {self.title}\n"\
                         f"Auteur : {self.author}\n"\
                         f"Année de sortie : {self.year}\n"\
                         f"Nombre de pages: {self.nbPages}\n"\
                         f"Langue : {self.language}\n\n"    
        return book_to_string 
       
      
 
book1 = Book("Data Science avec Microsoft Azure", "M.Khichane", 2018, 346, "Français")
book2 = Book("The Old Man and the Sea", "Ernest Hemingway", 1952, 109, "Anglais")
 
print(book1)
print(book2)

 
 