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

 
class ITBook(Book):
    def __init__(self, title, author, year, nbPages, language, domain, technologies):
        super().__init__(title, author, year, nbPages, language)
        self.domain = domain
        self.technologies = technologies
        
    def get_infos(self):
        super().get_infos()
        print(f"Domaine d'application : {self.domain}")
        print(f"Technologies utilisées : {self.technologies}\n\n")

        

class NovelBook(Book):
    def __init__(self, title, author, year, nbPages, language,      category, movie_adaptation = False):
        super().__init__(title, author, year, nbPages, language)
        self.category = category 
        self.movie_adaptation = movie_adaptation

    def get_infos(self):
        super().get_infos()
        print(f"Catégorie : {self.category}")
        print(f"Adaptation cinématographique : {self.movie_adaptation}\n\n")

        
        
book1 = ITBook("Data Science avec Microsoft Azure", "M.Khichane", 2018, 346, "Français", "Data Science", ["Azure", "Azure ML", "PowerBI", "R"])
book2 = NovelBook("The Old Man and the Sea", "Ernest Hemingway", 1952, 109, "Anglais", "Roman", True)

book1.get_infos()  
book2.get_infos()






 