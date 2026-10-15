import random as rd

def print_random_list(n, min_val =1, max_val=100):
    rd_list = []
    for i in range(n):
        rd_list.append(rd.randint(min_val, max_val))
        
    return rd_list    
rd.seed(1)
 
my_list = print_random_list(10, 1,100)
print(f"rd_list={my_list}")

  




    
