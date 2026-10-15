class Book:
    nb_book = 0 
     
    def __init__(self):
        type(self).nb_book = type(self).nb_book + 1
         
book1 = Book()         
book2 = Book()
book3 = Book()

print(f"Le nombre de livres avec Book.nb_book  : {Book.nb_book}")        
print(f"Le nombre de livres est : {book1.nb_book}")
print(f"Le nombre de livres est : {book2.nb_book}")
print(f"Le nombre de livres est : {book3.nb_book}")




 