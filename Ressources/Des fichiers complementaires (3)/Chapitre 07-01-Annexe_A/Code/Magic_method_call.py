class Book: 
    def __init__(self, title, author, price):
        self.title = title
        self.author = author
        self.price = price 
        
    def __call__(self):
        self.price = 10 
       
   
    
book1 = Book("Data Science avec Microsoft Azure", "M.Khichane", 100)
print(f"Le prix de {book1.title} = { book1.price}")
book1()
print(f"Le prix de {book1.title} = { book1.price}")

 
 