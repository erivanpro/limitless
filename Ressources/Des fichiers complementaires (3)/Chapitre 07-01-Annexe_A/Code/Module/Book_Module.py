print("\nImpor du module Book_Module\n")

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


def just_function():
    print("Je suis une fonction du module Book_Module !")
    
 