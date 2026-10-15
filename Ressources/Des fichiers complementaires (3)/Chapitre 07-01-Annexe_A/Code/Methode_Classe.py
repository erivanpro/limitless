class Book:
    nb_book = 0 
     
    def __init__(self):
        type(self).nb_book = type(self).nb_book + 1

    @classmethod
    def get_Book_infos(cls):
        if cls.nb_book == 0 :
            print("Pour l'instant aucun livre n'est crée !")  
        else :
            print(f"Le nombre de livres est :{cls.nb_book}")

Book.get_Book_infos()

book1= Book()
book2= Book()

Book.get_Book_infos()





 

