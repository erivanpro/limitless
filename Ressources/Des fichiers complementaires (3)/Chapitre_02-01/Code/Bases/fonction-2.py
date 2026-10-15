import random as rd

def print_random_list(n, min_val, max_val):
    rd_list = []
    for i in range(n):
        rd_list.append(rd.randint(min_val, max_val))
    print(f"rd_list={rd_list}")

rd.seed(1)
print_random_list(5, 1, 10)
print_random_list(10, 1, 100)

    
