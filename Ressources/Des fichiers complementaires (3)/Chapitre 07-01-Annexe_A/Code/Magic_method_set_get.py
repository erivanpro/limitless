class Book: 
    def __init__(self, title, author, price):
        self.title = title
        self.author = author
        self.price = price 


    def __getattribute__(self, attr_name):
        if attr_name == "price":
            return (super().__getattribute__(attr_name)  * 0.80)
        return super().__getattribute__(attr_name)

        
    def __setattr__(self, attr_name, attr_value):
        if attr_name == "price":
            if type(attr_value) is not float:
                print("Le prix doit être de type float!")   
                raise ValueError
        return super().__setattr__(attr_name, attr_value)
    
           
        
book1 = Book("Data Science avec Microsoft Azure", "M.Khichane", 100.00)

print(f"Le prix de {book1.title} = { book1.price}")
 
 