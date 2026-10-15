import random as rd

def print_random_list():
    rd_list = []
    for i in range(5):
        rd_list.append(rd.randint(1,10))
    print(f"rd_list={rd_list}")

rd.seed(1)
print_random_list()
    
