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
        print(f"Langue : {self.language}\n\n")    
        
 
book1 = Book("Data Science avec Microsoft Azure", "M.Khichane", 2018, 346, "Français")

book2 = Book("The Old Man and the Sea", "Ernest Hemingway", 1952, 109, "Anglais")

book1.get_infos()  
book2.get_infos()  
 
 