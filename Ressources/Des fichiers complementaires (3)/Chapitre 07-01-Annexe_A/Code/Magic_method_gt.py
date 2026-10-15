class Book: 
    def __init__(self, title, author, year, nb_pages, language):
        self.title = title
        self.author = author
        self.year = year
        self.nb_pages = nb_pages
        self.language = language
        
    def __gt__(self, book):
        result = self.year > book.year 
        return result
    
book1 = Book("Data Science avec Microsoft Azure", "M.Khichane", 2018, 346, "Français")
book2 = Book("The Old Man and the Sea", "Ernest Hemingway", 1952, 109, "Anglais")
 
my_bool =  book2 >  book1

print("book1>book2 ?: ", my_bool)

print(dir(book1))
 