import random as rd

def print_random_list(n = 5, min_val =1, max_val=100):
    rd_list = []
    for i in range(n):
        rd_list.append(rd.randint(min_val, max_val))
    print(f"rd_list={rd_list}")

rd.seed(1)
print_random_list(10, 100, 200)
print_random_list()
print_random_list(min_val = -100, max_val=100, n=4)
print_random_list(min_val = 50, max_val=55)
print_random_list(n=6)



    
