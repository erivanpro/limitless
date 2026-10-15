class Book: 
    def __init__(self, title, author, year, nbPages, language):
        self.title = title
        self.author = author
        self.year = year
        self.nbPages = nbPages
        self.language = language
        
 
book1 = Book("Data Science avec Microsoft Azure", "M.Khichane", 2018, 346, "Français")
book2 = Book("The Old Man and the Sea", "Ernest Hemingway", 1952, 109, "Anglais")
 
print("book1:", book1)
print("book2:", book2)

 


 