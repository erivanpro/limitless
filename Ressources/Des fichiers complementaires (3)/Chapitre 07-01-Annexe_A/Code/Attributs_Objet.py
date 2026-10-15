class Book: 
    def __init__(self, title, author, year, nbPages, language):
        self.title = title
        self.author = author
        self.year = year
        self.nbPages = nbPages
        self.language = language
        
 
book1 = Book("Data Science avec Microsoft Azure", "M.Khichane", 2018, 346, "Français")
book2 = Book("The Old Man and the Sea", "Ernest Hemingway", 1952, 109, "Anglais")
 
print(f"Voici les informations du livre : {book1.title}")
print(f"Auteur : {book1.author}")
print(f"Année de sortie : {book1.year}")
print(f"Nombre de pages: {book1.nbPages}")
print(f"Langue : {book1.language}\n\n")

print(f"Voici les informations du livre : {book2.title}")
print(f"Auteur : {book2.author}")
print(f"Année de sortie : {book2.year}")
print(f"Nombre de pages: {book2.nbPages}")
print(f"Langue : {book2.language}")


 