from abc import ABC, abstractmethod 
import json

class JSONify(ABC):
    @abstractmethod
    def to_json_string(self):
        pass
        
    @abstractmethod
    def save_to_file(self):
        pass         


class Book: 
    def __init__(self, title, author, year, nb_pages, language):
        self.title = title
        self.author = author
        self.year = year
        self.nb_pages = nb_pages
        self.language = language
        
    def get_infos(self):
        print(f"Voici les informations du livre : {self.title}")
        print(f"Auteur : {self.author}")
        print(f"Année de sortie : {self.year}")
        print(f"Nombre de pages: {self.nb_pages}")
        print(f"Langue : {self.language}")    
        
 
class ITBook(Book, JSONify):
    def __init__(self, title, author, year, nb_pages, language, domain, technologies):
        super().__init__(title, author, year, nb_pages, language)
        self.domain = domain
        self.technologies = technologies
        
    def get_infos(self):
        super().get_infos()
        print(f"Domaine d'application : {self.domain}")
        print(f"Technologies utilisées : {self.technologies}\n\n")
    
    def to_json_string(self):
        technologies = '['
        max_size = len(self.technologies)
        for index in range(0, max_size-1) :
            technologies+=f'"{self.technologies[index]}",'
        technologies+= f'"{self.technologies[max_size-1]}"]'
        json_form= f'{{"Titre":"{self.title}",'\
                 + f'"Author":"{self.author}",'\
                 + f'"Year":"{self.year}",'\
                 + f'"nbPages":"{self.nb_pages}",'\
                 + f'"Language":"{self.language}",'\
                 + f'"Field":"{self.domain}",'\
                 + f'"Technologies":{technologies}}}'
        return json_form             
        
        
    def save_to_file(self, filename):
        json_str = json.loads(self.to_json_string())
        with open(filename, "w") as json_file : 
            json.dump(json_str, json_file, indent=4,  ensure_ascii=False)
        
book1 = ITBook("Data Science avec Microsoft Azure", "M.Khichane", 2018, 346, "Français", "Data Science", ["Azure", "Azure ML", "PowerBI", "R"])
book1.save_to_file("../Data_Files/book1.json")
 



 