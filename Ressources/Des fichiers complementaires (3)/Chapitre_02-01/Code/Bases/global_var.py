n=10

def my_function(): 
    global n
    n=2
    print(f"Dans la fonction my_function n= {n}")
    
    
print(f"Dans le programme principal n= {n}")
my_function()

print(f"Dans le programme principal n= {n}")
